import axios from '../../interceptor/interceptor';

//importing hooks
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useCreateProtocol = () => {

    const [ flag, setFlag ] = useState('');

    //protocolOne States
    const [ goal, setGoal ] = useState('');
    const [ justification, setJustification ] = useState('');
    const [ population, setPopulation ] = useState('');
    const [ intervention, setIntervention ] = useState('');
    const [ control, setControl ] = useState('');
    const [ outcome, setOutcome ] = useState('');
    const [ context, setContext ] = useState('');

    //protocolTwo states
    const [ searchString, setSearchString ] = useState('null');
    const [ studyTypeDefinition, setStudyTypeDefinition ] = useState('null');
    const [ dataCollectionProcess, setDataCollectionProcess ] = useState('null');
    const [ researchQuestions, setResearchQuestions ] = useState< string[] >([]);
    const [ keywords, setKeywords ] = useState< string [] >([]);
    const [ studiesLanguages, setStydiesLanguages ] = useState< string[] >([]);
    const [ inclusionCriteria, setInclusionCriteria ] = useState< string[] >([]);
    const [ exclusionCriteria, setExclusionCriteria ] = useState< string[] >([]);
    const [ sourcesSelectionCriteria, setSourcesSelectionCriteria ] = useState('null');
    const [ informationSources, setInformationSources ] = useState< string[] >([]); 
    const [ searchMethod, setSearchMethod ] = useState('null');  
    const [ selectionProcess, setSelectionProcess ] = useState('null');

    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem('accessToken');
        let id = localStorage.getItem('systematicReviewId');
        let url = `http://localhost:8080/systematic-study/${id}/protocol`;
        let options = {
            headers: { Authorization: `Bearer ${token}` }
        }

        async function fetch() {
            const response = await axios.get(url, options);
            console.log(response);
            let data = response.data;
            
            setGoal(data.content.goal);
            setJustification(data.content.justification);
            setSearchString(data.content.searchString);
            setStudyTypeDefinition(data.content.studyTypeDefinition);
            setDataCollectionProcess(data.content.dataCollectionProcess);
            setSourcesSelectionCriteria(data.content.sourcesSelectionCriteria);
            setSearchMethod(data.content.searchMethod);
            setSelectionProcess(data.content.selectionProcess);
        
            if( data.content.picoc != null ) {
                setPopulation(data.content.picoc.population);
                setIntervention(data.content.picoc.intervention);
                setControl(data.content.picoc.control);
                setOutcome(data.content.picoc.outcome);
                setContext(data.content.picoc.context);
            }
        }

        fetch();
    }, [])

    //protocolOne

    async function createProtocol() {
        let data;
        const id = localStorage.getItem('systematicReviewId');
        const url = `http://localhost:8080/systematic-study/${id}/protocol`
        const token = localStorage.getItem('accessToken');
        let picoc = { population, intervention, control, outcome, context };
        
        let options = {
            headers: { Authorization: `Bearer ${token}` }
        } 

        if ( picoc.context != '' || picoc.control != '' || picoc.intervention != '' || picoc.outcome != '' || picoc.population != '' ) {
        
            data = { 
                goal, 
                justification, 
                picoc,
                searchString,
                studyTypeDefinition,
                dataCollectionProcess,
                sourcesSelectionCriteria,
                searchMethod,
                selectionProcess
            };
        
        }
        else data = { 
                goal, 
                justification, 
                picoc,
                searchString,
                studyTypeDefinition,
                dataCollectionProcess,
                sourcesSelectionCriteria,
                searchMethod,
                selectionProcess
            };

        return await axios.put(url, data, options);
    }

    async function handleDataAndGoNext() {
        let id = localStorage.getItem('systematicReviewId');

        try {
            await createProtocol();

            if( flag == 'protocol' ) navigate(`/newRevision/protocolPartTwo/${id}`);

            if( flag == 'protocolTwo' ) navigate(`/newRevision/ProtocolPartThree/${id}`);
        }
        catch( err ) { console.log(err); }
    }

    async function handleDataAndReturn() {
        const id = localStorage.getItem('systematicReviewId');

        try{
            await createProtocol();
            if( flag == 'protocol' )  navigate(`/newRevision`);
            if( flag == 'protocolTwo' ) navigate(`/newRevision/Protocol/${id}`);
        }
        catch( err ) { console.log(err); }
    } 

    //protocolTwo



    return { createProtocol, handleDataAndGoNext, handleDataAndReturn, setGoal, setJustification,
        setPopulation, setIntervention, setControl, setOutcome, setContext, setSearchString, 
        setStudyTypeDefinition, setDataCollectionProcess, setResearchQuestions, setKeywords,
        setStydiesLanguages, setInclusionCriteria, setExclusionCriteria, setSourcesSelectionCriteria,
        setInformationSources, setSearchMethod, setSelectionProcess, goal, justification,
        population, intervention, control, outcome, context, searchString, studyTypeDefinition, 
        dataCollectionProcess, researchQuestions, keywords, studiesLanguages, inclusionCriteria,
        exclusionCriteria, sourcesSelectionCriteria, informationSources, searchMethod, selectionProcess, setFlag };
}

export default useCreateProtocol;