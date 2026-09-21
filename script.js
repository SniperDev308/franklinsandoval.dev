const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!open));
    nav.style.display = open ? 'none' : 'flex';
    if (!open) {
      nav.style.position = 'absolute';
      nav.style.top = '86px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.flexDirection = 'column';
      nav.style.gap = '0';
      nav.style.padding = '16px 24px 22px';
      nav.style.background = 'rgba(7,9,10,.98)';
      nav.style.borderBottom = '1px solid #242b2f';
    }
  });
}

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});

// Keep the English HTML usable before JavaScript loads.
(()=>{
const translations = {
  "HOME": "INICIO",
  "PROJECTS": "PROYECTOS",
  "DC SIMULATOR": "SIMULADOR DC",
  "LAB": "LABORATORIO",
  "EXPERIMENTS": "EXPERIMENTOS",
  "ABOUT": "SOBRE MÍ",
  "CONTACT": "CONTACTO",
  "LAB ONLINE": "LABORATORIO EN LÍNEA",
  "Exploring. Building. Learning.": "Explorando. Construyendo. Aprendiendo.",
  "Systems that connect ideas to the real world.": "Sistemas que conectan ideas con el mundo real.",
  "My constantly evolving universe.": "Mi universo en constante evolución.",
  "ENTER MY UNIVERSE": "ENTRA A MI UNIVERSO",
  "SCROLL TO DISCOVER": "DESPLÁZATE PARA EXPLORAR",
  "TOTAL POWER": "POTENCIA TOTAL",
  "IT POWER 28 MW": "POTENCIA IT 28 MW",
  "RACKS": "RACKS",
  "FEATURED": "DESTACADOS",
  "VIEW ALL PROJECTS →": "VER TODOS LOS PROYECTOS →",
  "PRIVATE PREVIEW": "VISTA PREVIA PRIVADA",
  "DC DIGITAL TWIN": "GEMELO DIGITAL DC",
  "BMS & INTEGRATION SIMULATOR": "SIMULADOR BMS E INTEGRACIÓN",
  "Parametric simulator for IT load, electrical distribution and cooling. Available in English and Spanish.": "Simulador paramétrico de carga IT, distribución eléctrica y refrigeración. Interfaz en español e inglés.",
  "OPEN SIMULATOR": "ABRIR SIMULADOR",
  "AI ECOSYSTEM": "ECOSISTEMA DE IA",
  "Multi-agent platform for automation, analysis, monitoring and intelligent operations.": "Plataforma multiagente para automatización, análisis, monitoreo y operaciones inteligentes.",
  "ENTER ORION": "ENTRAR A ORION",
  "AUTOMATION LAB": "LABORATORIO DE AUTOMATIZACIÓN",
  "SCADA / PLC / CONTROLS": "SCADA / PLC / CONTROL",
  "Industrial automation lab for controls, PLCs, SCADA and protocols.": "Laboratorio de automatización industrial, control, PLCs, SCADA y protocolos.",
  "OPEN LAB": "ABRIR LABORATORIO",
  "3D & MANUFACTURING": "3D Y MANUFACTURA",
  "ADDITIVE SYSTEMS": "SISTEMAS ADITIVOS",
  "Design, 3D printing, prototyping and manufacturing solutions.": "Diseño, impresión 3D, prototipado y soluciones de manufactura.",
  "VIEW PROJECTS": "VER PROYECTOS",
  "TOTAL CAPACITY": "CAPACIDAD TOTAL",
  "RACKS SIMULATED": "RACKS SIMULADOS",
  "CDU UNITS": "UNIDADES CDU",
  "FCA UNITS": "UNIDADES FCA",
  "BUILDING SYSTEMS THAT MOVE IDEAS INTO THE REAL WORLD.": "CONSTRUYENDO SISTEMAS QUE LLEVAN LAS IDEAS AL MUNDO REAL.",
  "This site is a living showcase of personal projects in engineering, AI, automation, digital twins, critical infrastructure and manufacturing. There is a résumé, but here the systems speak for themselves.": "Este sitio funciona como showroom vivo de proyectos personales en ingeniería, IA, automatización, digital twins, infraestructura crítica y manufactura. El CV existe, pero aquí mandan los sistemas.",
  "PRIVACY": "PRIVACIDAD",
  "TERMS": "TÉRMINOS",
  "STATUS": "ESTADO",
  "MADE WITH PURPOSE · DESIGNED TO BUILD ·": "HECHO CON PROPÓSITO · DISEÑADO PARA CONSTRUIR ·",
  "Franklin Digital Lab home": "Inicio Franklin Digital Lab",
  "Main navigation": "Principal",
  "Laboratory status": "Estado del laboratorio",
  "Open menu": "Abrir menú",
  "Social media": "Redes sociales",
  "Concept view of Franklin Digital Lab": "Vista conceptual del Franklin Digital Lab",
  "Laboratory metrics": "Métricas del laboratorio",
  "Email": "Correo electrónico",
  "Franklin Digital Lab — a personal showcase of engineering, AI, automation, digital twins and 3D manufacturing.": "Franklin Digital Lab — showroom personal de ingeniería, IA, automatización, digital twins y manufactura 3D."
};
const entries=[];
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
while(walker.nextNode()){
  const node=walker.currentNode;
  if(node.parentElement.closest('script,style,.language-switch')) continue;
  const key=node.textContent.trim();
  if(Object.hasOwn(translations,key)) entries.push({node,original:node.textContent,key});
}
const attributes=[];
document.querySelectorAll('[aria-label],[alt],meta[name="description"]').forEach(element=>{
  for(const name of ['aria-label','alt','content']){
    const value=element.getAttribute(name);
    if(value && Object.hasOwn(translations,value)) attributes.push({element,name,value});
  }
});
function setLanguage(language){
  document.documentElement.lang=language;
  for(const {node,original,key} of entries) node.textContent=language==='es'?original.replace(key,translations[key]):original;
  for(const {element,name,value} of attributes) element.setAttribute(name,language==='es'?translations[value]:value);
  document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===language)));
  try{localStorage.setItem('franklin-site-language',language)}catch{}
}
let initial='en';
try{if(localStorage.getItem('franklin-site-language')==='es')initial='es'}catch{}
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
setLanguage(initial);
})();
