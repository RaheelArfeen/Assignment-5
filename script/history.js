document.getElementById('clear-btn').addEventListener('click', function(){
    const tasks = document.getElementById('tasks');
    tasks.innerHTML = ""
});


document.querySelectorAll('#complete-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        let taskBox = btn.closest('.taskBox');
        
        let title = taskBox.querySelector('#title').innerText;

        let time = new Date().toLocaleTimeString();

        let currentDate = new Date()
            
        const week = currentDate.toLocaleDateString("en-Us", { weekday: "short" });
        const month = currentDate.toLocaleDateString("en-US", { month: "short" });
        const day = currentDate.getDate().toString().padStart(2, "0");
        const year = currentDate.getFullYear();

        let completedTask = document.createElement('div');
        completedTask.className = 'bg-[#f4f7ff] rounded-lg p-3 font-medium mb-3 text-sm';
        completedTask.innerHTML = `<p>You have Completed the Task <b>${title}</b> at ${time} on ${week}, ${month} ${day} ${year}</p>`;

        document.getElementById('tasks').appendChild(completedTask);
    });
});