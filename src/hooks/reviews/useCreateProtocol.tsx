import axios from '../../interceptor/interceptor';

//importing hooks
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useCreateProtocol = () => {

    const [ flag, setFlag ] = useState('');

    //protocolOne States
    const [ goal, setGoal ] = useState< string | null >(null);
    const [ justification, setJustification ] = useState< string | null >(null);
    const [ population, setPopulation ] = useState< string | null >(null);
    const [ intervention, setIntervention ] = useState< string | null >(null);
    const [ control, setControl ] = useState< string | null >(null);
    const [ outcome, setOutcome ] = useState< string | null >(null);
    const [ context, setContext ] = useState< string | null >(null);

    //protocolTwo states
    const [ searchString, setSearchString ] = useState< string | null >(null);
    const [ studyTypeDefinition, setStudyTypeDefinition ] = useState< string | null >(null);
    const [ dataCollectionProcess, setDataCollectionProcess ] = useState< string | null >(null);
    const [ researchQuestions, setResearchQuestions ] = useState< string[] >([]);
    const [ keywords, setKeywords ] = useState< string [] >([]);
    const [ studiesLanguages, setStydiesLanguages ] = useState< string[] >([]);
    const [ inclusionCriteria, setInclusionCriteria ] = useState< string[] >([]);
    const [ exclusionCriteria, setExclusionCriteria ] = useState< string[] >([]);
    const [ sourcesSelectionCriteria, setSourcesSelectionCriteria ] = useState< string | null >(null);
    const [ informationSources, setInformationSources ] = useState< string[] >([]); 
    const [ searchMethod, setSearchMethod ] = useState< string | null >(null);  
    const [ selectionProcess, setSelectionProcess ] = useState< string | null >(null);
    const [ analysisAndSynthesisProcess, setAnalysisAndSynthesisProcess ] = useState<string | null>(null);
    const navigate = useNavigate();
    const id = localStorage.getItem('systematicReviewId');
    const url = `/systematic-study/${id}/protocol`;

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const id = localStorage.getItem('systematicReviewId');
        const url = `/systematic-study/${id}/protocol`;
        const options = {
            headers: { Authorization: `Bearer ${token}` }
        }

        async function fetch() {
            const response = await axios.get(url, options);
            console.log(response);
            const data = response.data;
            
            setGoal(data.content.goal);
            setJustification(data.content.justification);
            setSearchString(data.content.searchString);
            setStudyTypeDefinition(data.content.studyTypeDefinition);
            setDataCollectionProcess(data.content.dataCollectionProcess);
            setSourcesSelectionCriteria(data.content.sourcesSelectionCriteria);
            setSearchMethod(data.content.searchMethod);
            setSelectionProcess(data.content.selectionProcess);
            setAnalysisAndSynthesisProcess(data.content.analysisAndSynthesisProcess);
        
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
        const token = localStorage.getItem('accessToken');
        const picoc = { population, intervention, control, outcome, context };
        
        const options = {
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
        const id = localStorage.getItem('systematicReviewId');

        try {
            await createProtocol();

            if( flag == 'protocol' ) navigate(`/newRevision/protocolPartTwo/${id}`);

            if( flag == 'protocolTwo' ) navigate(`/newRevision/ProtocolPartThree/${id}`);

            if( flag == 'protocolThree' ) navigate(`/newRevision/extraction`);
        }
        catch( err ) { console.log(err); }
    }

    async function handleDataAndReturn() {
        const id = localStorage.getItem('systematicReviewId');

        try{
            await createProtocol();
            if( flag == 'protocol' )  navigate(`/newRevision`);
            if( flag == 'protocolTwo' ) navigate(`/newRevision/protocol/${id}`);
            if( flag == 'protocolThree' ) navigate(`/newRevision/protocolpartTwo/${id}`);
        }
        catch( err ) { console.log(err); }
    } 

    //protocolTwo

    async function sendSelectData(data: string[], context: string){
        let content;
        const token = localStorage.getItem('accessToken');
        const options = {
            headers: { Authentication: `Bearer ${ token }` }
        }

        try{
            if( context == 'Languages' ) content = { studiesLanguages: data };
            else content = { informationSources: data };
            
            const response = await axios.put(url, content, options);
            console.log(response);
        }
        catch(err) { console.log(err); } 
    }

    async function sendAddText(data: string[], context: string) {
        console.log(data, context);
        let content;
        const token = localStorage.getItem(`accessToken`);
        const options = {
            headers: { Authorization: `Bearer ${ token }` }
        }

        if( context == 'Research Questions' ) content = { researchQuestions: data };
        if( context == 'Keywords' ) content = { keywords: data };
        if( context == 'Inclusion criteria' ) {
            const array: { description: string, type: string }[] = data.map((item: string) => {
                return { description: item, type: 'INCLUSION' };
            })

            const response = await axios.get(url, options);
            let aux: {description: string, type: string}[] = response.data.content.eligibilityCriteria;
            aux = aux.filter((item) => {
                if(item.type == "EXCLUSION") return item;
            })

            content = [...aux, ...array];
            content = { eligibilityCriteria: content };
        }
        if( context == 'Exclusion criteria' ) {
            const array: { description: string, type: string }[] = data.map((item: string) => {
                return { description: item, type: 'EXCLUSION' };
            })

            const response = await axios.get(url, options);
            let aux: {description: string, type: string}[] = response.data.content.eligibilityCriteria;
            aux = aux.filter((item) => {
                if(item.type == "INCLUSION") return item;
            })

            content = [...aux, ...array];
            content = { eligibilityCriteria: content };
        }

        try {
            console.log(content);
            await axios.put(url, content, options);
        }
        catch( err ) { console.log(err) }
    }

    //protocol three



    return { createProtocol, handleDataAndGoNext, handleDataAndReturn, setGoal, setJustification,
        setPopulation, setIntervention, setControl, setOutcome, setContext, setSearchString, 
        setStudyTypeDefinition, setDataCollectionProcess, setResearchQuestions, setKeywords,
        setStydiesLanguages, setInclusionCriteria, setExclusionCriteria, setSourcesSelectionCriteria,
        setInformationSources, setSearchMethod, setSelectionProcess, sendSelectData, sendAddText, goal, justification,
        population, intervention, control, outcome, context, searchString, studyTypeDefinition, 
        dataCollectionProcess, researchQuestions, keywords, studiesLanguages, inclusionCriteria,
        exclusionCriteria, sourcesSelectionCriteria, informationSources, searchMethod, selectionProcess, analysisAndSynthesisProcess, setFlag };
}

export default useCreateProtocol;