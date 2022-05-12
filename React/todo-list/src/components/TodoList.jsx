import React, { useState } from 'react';

const TodoList = () => {
    let [listItem, setlistItem] = useState("");
    // Setting a State variable for each input of my list
    // ===========================================================================
    let [completeTask, setCompleteTask] = useState(false);
    // Setting a boolean value for my checkbox to mark items in my list completed or not
    // ===========================================================================
    let [list, setList] = useState([]);
    // Create a state variable that is an array to store items put into our list giving the ability to iterate through them below in our table 
    // ===========================================================================
    const submitListItem = (e) => {
        // "e" is used to represent an event, you can use any parameter here but e is the common practice
        // prevent default is used to keep the the page from rerendering once submitted
        e.preventDefault();
        console.log("I'm working")
        // Creating a hashmap called list (object,dict) to group together all of our submit items together
        let task = {item: listItem, checkBox: completeTask }
        // Now we're using our  setter for  listItem to create an object that will now have our new listItem provided by our submitListItem function
        setList([...list, task]);
        // Now to clear out our state variables we set them to empty strings to clear out forms 
        setlistItem("");
        // setCompleteTask(" ");
    }
    //  ===========================================================================
// Function to toggle completeTask checkbox 
    const checkedOff = (e,index)=>{
        // Need to make a copy of my state variable list
        let [...copyList] = list;
        // Now we'll change the list at the specific index location to true or false 
        copyList[index].completeTask = e.target.checked;
        // e.target.checked specifies if the checkbox is checked or not with a true or false value
        setList(copyList);
    }
    //  ===========================================================================
    const deleteItem = (e,index) => {
        // function for my delete button
        console.log('Deleting todo list item at index -->', index)
        // .filter allows you alter an object without making a copy , it makes one for you
        // .filter also works like .map() where it takes any parameter and the index of the object you are tying to interate through. 
        let filteredCopy = list.filter((item,j)=>{
            // i in this function represents the index number for our list items
            return j != index
            // this line returns back only the items whos index number doesnt match the index number of the list items we want to delete 
        })
        // now we must update the state variable with the modified copy 
        setList(filteredCopy);
    }
    return (
        <>
            {/* this is the form used to submit list items */}
            <form onSubmit={submitListItem}>
                <div className="mb-3">
                    <label htmlFor=''></label>
                    <input onChange={(e) => { setlistItem(e.target.value) }} type="text" className="form-control" value={listItem} />
                </div>
                <button type="submit" className="btn btn-primary mb-5">Add To List</button>
            </form>
            {/* This table will be used to populate items submitted from my form */}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Task</th>
                            <th scope="col">Completed</th>
                            <th scope="col">Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((listObj, index) => {
                                return (
                                    <tr key={index} style={{textDecoration:listObj.completeTask? "line-through":"none" }} >
                                        <td>
                                            {listObj.item}
                                        </td>
                                        <td>
                                            <input onClick={(e)=>{checkedOff(e,index)}} type="checkbox" className="" id="" />
                                        </td>
                                        <td>
                                            <button onClick={(e) => {deleteItem(e,index) }} className='btn btn-dark'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        {/* <tr>
                                    <td></td>
                                    <td><input type="checkbox" className="" id=""/>
                                        <label className="" for=""></label></td>
                                    <td> <button onClick={() => { deleteItem() }} className='btn btn-dark'>Delete</button></td>
                                </tr> */}
                    </tbody>
                </table>
            </div>
            {/* <button className='btn btn-primary'>Add</button>
                <h3>Get Python Black Belt</h3>
                <button onClick={() => { deleteBelt() }} className='btn btn-dark'>Delete</button> */}
        </>
    )

}


export default TodoList;