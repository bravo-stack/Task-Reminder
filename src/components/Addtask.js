import { useState } from "react";

const Addtask = ({bgColor, onAdd}) => {

    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert("please add a task")
            return
        }

        onAdd({text, day, reminder})

        setText("")
        setDay("")
        setReminder(false)
    }

    return (
        <form className="add-form form-cont" onSubmit={onSubmit} >
            <div className="form-control">
                <label>Task</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>


            <div className="form-control form-control-check">
                    <label htmlFor="remind">Remind Me</label>
                    <input id="remind" type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
                </div>

                <input className="btn btn-block save-task" style={{color: "white", backgroundColor: bgColor}} type="submit" value="Save Task" />
        </form>
    );
};

export default Addtask;
