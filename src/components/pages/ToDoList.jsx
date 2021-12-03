import { styled } from '@material-ui/core'
import TextField from '@mui/material/TextField'
import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import './css/ToDoList.css'
import DeleteIcon from '@mui/icons-material/Delete';
import $ from 'jquery';
const ToDoList = () => {
    // Text Fields
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: 'grey',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'grey',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'black',
            },
            '&:hover fieldset': {
                borderColor: 'grey',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'black',
            },
        },
    });
    // Getting the Data and Saved
    var array_list = [];
    var array_date = [];
    function Saved() {
        var listValue = document.querySelector('form #custom-css-outlined-input');
        var date = document.querySelector('form #date-today');
        let rows = {
            toDoList: listValue.value,   //list values
            date: `${date.value}`, // date values
        }
        array_list.push(rows.toDoList); //push the object.index_1
        array_date.push(rows.date);//push the object.index_2
        localStorage.setItem('Thoughts', JSON.stringify(array_list)); //store array list
        localStorage.setItem('Dates', JSON.stringify(array_date)); //store array date
        var thinks = [];
        var dates = [];
        var var_date = [];
        thinks = JSON.parse(localStorage.getItem('Thoughts')); //retrieve data array list
        dates = JSON.parse(localStorage.getItem('Dates')); //retrieve data array date
        console.log(thinks != null);
        console.log(dates != null);
        console.log(!var_date == null);

        if (thinks != null && dates != null) { //validation for nulls
            for (let index = 0; index < thinks.length; index++) {
                if (index < 6) {
                    var_date = var_date + `<tr> <td> <input type='checkbox' name='chk' scope='col' value='${index}' /> </td> <td> ${thinks[index]} </td> <td>  ${dates[index]} </td>  <tr>`;
                    
                }
            }
        }
        if (var_date != null) { //validation for nulls
            document.getElementById('table').innerHTML = var_date;
        }
    }
// Deleting the Storage
    function Delete() {
        // localStorage.clear();
        console.log(checkBoxes.value);
    }
    //select checkboxes all
    var checkBoxes = document.querySelectorAll('input[ type = "checkbox" ] :checked');
    console.log(checkBoxes);
    function selectAll(myCheckBox) {
        console.log(myCheckBox.checked === true);
        if (!myCheckBox.checked === true) {
            checkBoxes.forEach(checkbox => {
                checkbox.checked = true;
            });
        }
        else {
            checkBoxes.forEach(checkbox => {
                checkbox.checked = false;
            });
        }
    }

    return (
        <>
            <br /><br /><br /><br />
            <Box className="container-fluid border border-bottom rounded shadow" component="form" npValidate sx={{ border: '1px solid black', height: 550, width: 700 }}>
                <form action="" method="get">
                    <div className="container"><br />
                        <p className="text-dark fs-5 text-center">
                            Thoughts of the Day
                        </p>
                        <CssTextField style={{ position: 'relative', marginLeft: 80 }} className="w-50" label="My thoughts today..." id="custom-css-outlined-input" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <CssTextField className="w-25" label="12/06/2021" id="date-today" />
                        <div className="row w-75" style={{ marginLeft: 60 }}>
                            <div className="col"><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button type="button" onClick={Saved} style={{ position: 'relative', left: 30, background: 'black' }} variant="contained" endIcon={<SaveIcon />}>Save</Button>
                            </div>
                            <div className="col"><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button type="button" onClick={Delete} style={{ position: 'relative', right: -50,top: -20, color: 'black' }} className="border border-dark" variant="outlined" endIcon={<DeleteIcon />}>Delete</Button>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid rounded px-0 py-0" style={{ position: 'relative', right: 0, top: 20, width: 580, height: 296 }}>
                        <table className="table text-center table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Thought Lists</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody id='table'>

                            </tbody>
                        </table>
                    </div>
                </form>
            </Box>
        </>
    )
}
export default ToDoList
