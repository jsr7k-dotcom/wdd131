document.addEventListener('DOMContentLoaded', () => {
    
    // Inquiry Form
    const form = document.getElementById('inquiryForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`DATA RECEIVED. Initiating protocol for: ${name}`);
            form.reset();
        });
    }

    // Scheduler
    const scheduleBtn = document.getElementById('scheduleBtn');
    if(scheduleBtn) {
        scheduleBtn.addEventListener('click', () => {
            const platform = document.querySelector('input[name="platform"]:checked').value;
            
            // LINKS
            const myPhone = "+15550199876";
            const myZoom = "https://zoom.us/j/your-id";
            const myMeet = "https://meet.google.com/smr-bcqn-qdx";

            if(platform === 'phone') window.location.href = `tel:${myPhone}`;
            else if(platform === 'zoom') window.open(myZoom, '_blank');
            else if(platform === 'meet') window.open(myMeet, '_blank');
        });
    }
});