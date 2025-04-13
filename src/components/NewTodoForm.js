import React, {useState} from 'react'

const NewTodoForm = (props) => {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    // const descriptionChange = (event) =>{
    //     console.log(event.target.value)
    //     setDescription(event.target.value)
    // }

    //This is another option to add an event. the onChange in Description  is the other option
    const assignedChange = (event) =>{
        console.log(event.target.value)
        setAssigned(event.target.value)
    }

    const submitTodo = () => {
        if( description != '' && assigned != '')
            props.addTodo(description,assigned)
        setDescription('')
        setAssigned('')
    }

  return (
    <div className='mt-5'>
        <form>
            <div className='mb-3'>
                <label className='form-label'>Assigned</label>
                <input 
                type='text' 
                className='form-control' 
                required
                onChange={assignedChange}
                value={assigned}
                ></input>
            </div>
            <div className='mb-3'>
                <label className='form-control'>Description</label>
                <textarea 
                className='form-control' 
                rows={3} 
                required
                onChange={e => setDescription(e.target.value)}
                value={description}
                ></textarea>
            </div>
            <button type='button' className='btn btn-primary mt-3' onClick={submitTodo}>Add Todo</button>
        </form>
    </div>
  )
}

export default NewTodoForm
