import axios from '../../interceptor/interceptor';

//importing hooks
import { useEffect, useState } from 'react';
import { FaLanguage } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const useCreateProtocol = () => {

    //protocolOne States
    const [ goal, setGoal ] = useState('');
    const [ justification, setJustification ] = useState('');
    const [ population, setPopulation ] = useState('');
    const [ intervention, setIntervention ] = useState('');
    const [ control, setControl ] = useState('');
    const [ outcome, setOutcome ] = useState('');
    const [ context, setContext ] = useState('');

    //protocolTwo states
    const [ searchString, setSearchString ] = useState('');
    const [ studyTypeDefinition, setStudyTypeDefinition ] = useState('');
    const [ dataCollectionProcess, setDataCollectionProcess ] = useState('');
    const [ researchQuestions, setResearchQuestions ] = useState< string[] >([]);
    const [ keywords, setKeywords ] = useState< string [] >([]);
    const [ studiesLanguages, setStydiesLanguages ] = useState< string[] >([]);
    const [ inclusionCriteria, setInclusionCriteria ] = useState< string[] >([]);
    const [ exclusionCriteria, setExclusionCriteria ] = useState< string[] >([]);
    const [ sourcesSelectionCriteria, setSourcesSelectionCriteria ] = useState('');
    const [ informationSources, setInformationSources ] = useState< string[] >([]); 
    const [ searchMethod, setSearchMethod ] = useState('');  
    const [ selectionProcess, setSelectionProcess ] = useState('');

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
            
            if( data.content.picoc != null ) {
                setPopulation(data.content.picoc.population);
                setIntervention(data.content.picoc.intervention);
                setControl(data.content.picoc.control);
                setOutcome(data.content.picoc.outcome);
                setContext(data.content.picoc.context);
            }
        }
        console.log(`goals: ${goal}`)
        fetch()
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
        
            data = { goal, justification, picoc };
        
        }
        else data = { goal, justification }; 

        return await axios.put(url, data, options);
    }

    async function handleDataAndGoNext() {
        let id = localStorage.getItem('systematicReviewId');

        try {
            await createProtocol();
            navigate(`/newRevision/ProtocolPartTwo/${id}`);
        }
        catch( err ) { console.log(err); }
    }

    async function handleDataAndReturn() {
        await createProtocol();
        navigate(`/newRevision`);
    } 

    //protocolTwo




    return { createProtocol, handleDataAndGoNext, handleDataAndReturn, setGoal, setJustification,
        setPopulation, setIntervention, setControl, setOutcome, setContext, setSearchString, 
        setStudyTypeDefinition, setDataCollectionProcess, setResearchQuestions, setKeywords,
        setStydiesLanguages, setInclusionCriteria, setExclusionCriteria, setSourcesSelectionCriteria,
        setInformationSources, setSearchMethod, setSelectionProcess, goal, justification,
        population, intervention, control, outcome, context, searchString, studyTypeDefinition, 
        dataCollectionProcess, researchQuestions, keywords, studiesLanguages, inclusionCriteria,
        exclusionCriteria, sourcesSelectionCriteria, informationSources, searchMethod, selectionProcess };
}

export default useCreateProtocol;