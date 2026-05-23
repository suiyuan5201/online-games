function showToast(msg){const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.classList.add('show'),10);setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),300)},2500);}
function downloadCanvas(canvas,filename){const link=document.createElement('a');link.download=filename;link.href=canvas.toDataURL('image/png');link.click();}
function isMobile(){return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);}
