// const folders = document.querySelectorAll('.folder');
// const ranks = document.querySelectorAll('.rank-three');
// const leaderboard = document.querySelectorAll('.leaderboard');

document.addEventListener("wheel", function(e) {
  if (e.ctrlKey) e.preventDefault();
}, { passive: false });

document.addEventListener("keydown", function(e) {
  if (e.ctrlKey && (e.key === "+" || e.key === "-" || e.key === "=")) {
    e.preventDefault();
  }
});


const folderBody = document.querySelector('.folder-body');
const folderTab = document.querySelector('.folder-tab');

const BODY_H = 540;
const TAB_H  = 70;

const closedPos = {
    rankings:  100,
    services:  -(BODY_H - TAB_H - 40),
    request:   -(2 * BODY_H - TAB_H - 40)
};

const hoverPos = {
    rankings:  92,
    services:  -(BODY_H - TAB_H - 30),
    request:   -(2 * BODY_H - TAB_H - 30)
};

const openPos = {
    rankings:  -(BODY_H - 300),
    services:  -(2 * BODY_H - 300),
    request:   -(3 * BODY_H - 300)
};

const folders = document.querySelectorAll('.folder');
const ranks = document.querySelectorAll('.rank-three');
const leaderboard = document.querySelectorAll('.leaderboard');

folders.forEach(folder => {
    const tab = folder.querySelector('.folder-tab');

    tab.addEventListener('mouseenter', function(){
        if(!folder.classList.contains('open')){
            folder.style.transform = `translateY(${hoverPos[folder.id]}px)`;
        }
    });

    tab.addEventListener('mouseleave', function(){
        if(!folder.classList.contains('open')){
            folder.style.transform = `translateY(${closedPos[folder.id]}px)`;
        }
    });

    tab.addEventListener('click', function() {
        const isOpen = folder.classList.contains('open');

        if(isOpen){
            folder.classList.remove('open');
            folder.style.transform = `translateY(${closedPos[folder.id]}px)`;

            const anyOpen = document.querySelector('.folder.open');
            if(!anyOpen){
                document.getElementById('hero').classList.remove('shrink');
                document.getElementById('tag-line').classList.remove('fade');
                document.getElementById('hr').classList.remove('fade');
            }
        }

        if(!isOpen){
            folder.classList.add('open');
            folder.style.transform = `translateY(${openPos[folder.id]}px)`;
            document.getElementById('hero').classList.add('shrink');
            document.getElementById('tag-line').classList.add('fade');
            document.getElementById('hr').classList.add('fade');
        }
    });
});


// folders.forEach(folder => {
//     const tab = folder.querySelector('.folder-tab');

//     tab.addEventListener('mouseenter', function(){
//         if(!folder.classList.contains('open')){
//             if(folder.id == 'rankings'){
//                 folder.style.transform = 'translateY(92px)';
//             } else if(folder.id=='services'){
//                 folder.style.transform = 'translateY(-508px)';
//             } else if(folder.id == 'request'){
//                 folder.style.transform = 'translateY(-1108px)'
//             }
//         }
//     })

//     tab.addEventListener('mouseleave', function(){
//         if(!folder.classList.contains('open')){
//              if(folder.id == 'rankings'){
//                 folder.style.transform = 'translateY(100px)';
//             } else if(folder.id=='services'){
//                 folder.style.transform = 'translateY(-500px)';
//             } else if(folder.id == 'request'){
//                 folder.style.transform = 'translateY(-1100px)'
//             }
//         }
//     })

//     tab.addEventListener('click', function() {
//         const isOpen = folder.classList.contains('open');

//         if(isOpen){
//             folder.classList.remove('open');

//             folder.style.transform = ''; 
//                 if(folder.id === 'rankings') folder.style.transform = 'translateY(100px)';
//                 if(folder.id === 'services') folder.style.transform = 'translateY(-500px)';
//                 if(folder.id === 'request') folder.style.transform = 'translateY(-1100px)';

//             const anyOpen = document.querySelector('.folder.open');

//             if(!anyOpen){
//                 document.getElementById('hero').classList.remove('shrink');
//                 document.getElementById('tag-line').classList.remove('fade');
//                 document.getElementById('hr').classList.remove('fade');
//             }
            
//         }

//         if(!isOpen){
//             folder.classList.add('open');
//              folder.style.transform = ''; 
//            document.getElementById('hero').classList.add('shrink');
//            document.getElementById('tag-line').classList.add('fade');
//            document.getElementById('hr').classList.add('fade');
//         }
//     }) 
// })




ranks.forEach(rank =>{
    rank.addEventListener('mouseenter', function(){
        if(rank.id=='first'){
            rank.style.width = "410px";
            rank.style.height = "410px";
            rank.style.transition = "all 0.5s ease";
        } else if(rank.id=='second'){
            rank.style.width = "310px";
            rank.style.height = "330px";
            rank.style.transition = "all 0.5s ease";
        } else if(rank.id =='third'){
            rank.style.width = "290px";
            rank.style.height = "310px";
            rank.style.transition = "all 0.5s ease";
        }

    })

    rank.addEventListener('mouseleave', function(){
        if(rank.id=='first'){
            rank.style.width = "400px";
            rank.style.height = "400px";
        } else if(rank.id=='second'){
            rank.style.width = "300px";
            rank.style.height = "320px";
        } else if(rank.id =='third'){
            rank.style.width = "280px";
            rank.style.height = "300px";
        }

    })

})



leaderboard.forEach(tops =>{
    tops.addEventListener('mouseenter', function(){
            tops.style.width = "810px";
            tops.style.height = "100px";
            tops.style.transition = "all 0.4s ease";
    })

})

leaderboard.forEach(tops =>{
    tops.addEventListener('mouseleave', function(){
            tops.style.width = "800px";
            tops.style.height = "90px";
    })

})

document.querySelectorAll('.operation-card').forEach(card => {
    card.addEventListener('click', function() {
        const isSelected = card.classList.contains('selected');
        
        document.querySelectorAll('.operation-card').forEach(c => c.classList.remove('selected'));
        
        if(!isSelected){
            card.classList.add('selected');
        }
    });
});


const myfile = document.getElementById('myfile');
if (myfile) {
  myfile.addEventListener('change', function(){
    const fileName = this.files[0] ? this.files[0].name : 'Choose a file...';
    document.getElementById('file-text').textContent = fileName;
  });
}

const form = document.getElementById('form-section');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = form.querySelector('.submit-btn');
    const prefix = btn.getAttribute('data-prefix');
    const caseId = prefix + '-' + Math.floor(10000 + Math.random() * 90000);
    document.getElementById('caseId').textContent = caseId;

    form.style.display = 'none';
    document.getElementById('success-section').style.display = 'block';

    ['s1','s2','s3'].forEach((lineId, i) => {
      setTimeout(() => {
        document.getElementById(lineId).classList.add('visible');
      }, 600 + i * 500);
    });
  });
}







