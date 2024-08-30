import axios from '../../interceptor/interceptor';

//importing hooks
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useCreateProtocol = () => {

    const [ goal, setGoal ] = useState('');
    const [ justification, setJustification ] = useState('');
    const [ population, setPopulation ] = useState('');
    const [ intervention, setIntervention ] = useState('');
    const [ control, setControl ] = useState('');
    const [ outcome, setOutcome ] = useState('');
    const [ context, setContext ] = useState('');
 
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


    return { createProtocol, handleDataAndGoNext, handleDataAndReturn, setGoal, setJustification,
        setPopulation, setIntervention, setControl, setOutcome, setContext, goal, justification,
        population, intervention, control, outcome, context };
}

export default useCreateProtocol;