// Clock
const loadTime = () => {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = addZeroUntilUnit(m);
    s = addZeroUntilUnit(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    setTimeout(loadTime, 1000);
}

const addZeroUntilUnit = (i) => {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
// toDo list
document.querySelector('#push').onclick = function() {

    if (document.querySelector('#taskcreate input').value.length == 0) {
        alert("Please Enter a Task")

    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#taskcreate input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        let current_tasks = document.querySelectorAll(".delete");

        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }
}