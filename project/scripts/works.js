// DATA
const projects = [
    {
        id: 1,
        client: "Mi Pasto Sintético",
        role: "DEV + GROWTH",
        category: "development",
        challenge: "We have a product but no voice.",
        solution: "A high-performance landing page paired with a LinkedIn campaign.",
        image: "images/mipasto.png",
        metrics: [ {val:"+400%", lbl:"LEAD GEN"}, {val:"98/100", lbl:"PERFORMANCE"}, {val:"2,500", lbl:"CLICKS"} ]
    },
    {
        id: 2,
        client: "Psicólogo Roberto Balderas",
        role: "SOCIAL STRATEGY",
        category: "marketing",
        challenge: "Great personal connection, low local awareness.",
        solution: "Geo-targeted Instagram ads and influencer outreach program.",
        image: "images/psic-rob-bal.png",
        metrics: [ {val:"15k", lbl:"NEW FOLLOWERS"}, {val:"3.5x", lbl:"ROAS"}, {val:"12%", lbl:"CONVERSION"} ]
    },
    {
        id: 3,
        client: "White Water Rafting Co.",
        role: "FULL STACK",
        category: "development",
        challenge: "Slow loading speeds killing sales.",
        solution: "Optimized website, latest good practices.",
        image: "images/wwr-website.png",
        metrics: [ {val:"0.8s", lbl:"LOAD TIME"}, {val:"+45%", lbl:"SALES"}, {val:"100%", lbl:"UPTIME"} ]
    }
];

// STATE
let saved = JSON.parse(localStorage.getItem('hybridSaved')) || [];
const container = document.getElementById('project-container');
const countDisplay = document.getElementById('savedCount');
const filters = document.querySelectorAll('.filter-btn');

function render(filterKey) {
    if(!container) return; 
    container.innerHTML = '';
    
    const visible = filterKey === 'all' ? projects : projects.filter(p => p.category === filterKey);

    visible.forEach(p => {
        const isSaved = saved.includes(p.id);
        const saveTxt = isSaved ? "SAVED ★" : "SAVE ☆";
        
        // Template Literal for Metrics
        const metricsHTML = p.metrics.map(m => `
            <div class="metric-box"><span class="metric-val">${m.val}</span><span class="metric-lbl">${m.lbl}</span></div>
        `).join('');

        // Template Literal for Card
        const html = `
            <article class="case-study">
                <div class="case-header">
                    <div>CLIENT: ${p.client}</div>
                    <div>ROLE: ${p.role} <button onclick="toggleSave(${p.id})" style="border:none; background:none; font-weight:bold; cursor:pointer;">[ ${saveTxt} ]</button></div>
                </div>
                <div class="case-body">
                    <div class="case-image"><img src="${p.image}" alt="Work"></div>
                    <div class="case-content">
                        <div style="margin-bottom:1rem;"><h3>THE CHALLENGE:</h3><p>"${p.challenge}"</p></div>
                        <div><h3>THE SOLUTION:</h3><p>${p.solution}</p></div>
                    </div>
                </div>
                <div class="metrics-row">${metricsHTML}</div>
            </article>
        `;
        container.innerHTML += html;
    });
}

window.toggleSave = function(id) {
    if(saved.includes(id)) saved = saved.filter(i => i !== id);
    else saved.push(id);
    localStorage.setItem('hybridSaved', JSON.stringify(saved));
    updateUI();
};

function updateUI() {
    if(countDisplay) countDisplay.innerText = saved.length;
    const active = document.querySelector('.filter-btn.active');
    if(active) render(active.dataset.filter);
}

if(filters) {
    filters.forEach(btn => btn.addEventListener('click', (e) => {
        filters.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        render(e.target.dataset.filter);
    }));
}

// Init
document.addEventListener('DOMContentLoaded', updateUI);