document.querySelectorAll('#complete-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Board updated Successfully');
        button.style.pointerEvents = 'none';
        button.style.opacity = '50%';
        button.innerText = 'Completed'
        
        let allDisabled = Array.from(document.querySelectorAll('#complete-btn')).every(function(button){
            return button.style.pointerEvents === 'none';
        })
    
        if(allDisabled){
            alert('Congrates!!! You have completed all the current task');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const taskCountElement = document.getElementById('task-count');
    let taskCount = parseInt(taskCountElement.innerText);
    const taskNumberElement = document.getElementById('task-number');
    let taskNumber = parseInt(taskNumberElement.innerText);

    const completedButtons = document.querySelectorAll('#complete-btn');

    completedButtons.forEach(button => {
        button.addEventListener('click', function() {
            taskCount += 1;
            taskNumber -= 1;

            taskCountElement.innerText = taskCount;
            taskNumberElement.innerText = taskNumber;
        });
    });
});