
const ramos = [
  { id: "anatomia_funcional_basica", nombre: "Anatomía funcional básica", requisitos: [] },
  { id: "introduccion_a_la_kinesiologia", nombre: "Introducción a la kinesiología", requisitos: [] },
  { id: "fisica_aplicada_para_el_movimiento_humano", nombre: "Física aplicada para el movimiento humano", requisitos: [] },
  { id: "biologia_celular", nombre: "Biología celular", requisitos: [] },
  { id: "matematica_basica", nombre: "Matemática básica", requisitos: [] },
  { id: "quimica_general", nombre: "Química general", requisitos: [] },
  { id: "anatomia_aplicada_al_movimiento_humano", nombre: "Anatomía aplicada al movimiento humano", requisitos: ["anatomia_funcional_basica"] },
  { id: "bioquimica_general", nombre: "Bioquímica general", requisitos: ["biologia_celular", "quimica_general"] },
  { id: "comunicacion_en_lengua_inglesa_nivel_basico", nombre: "Comunicación en lengua inglesa nivel básico", requisitos: [] },
  { id: "socioantropologia_de_la_salud", nombre: "Socioantropología de la salud", requisitos: [] },
  { id: "biomecanica_clinica", nombre: "Biomecánica clínica", requisitos: ["matematica_basica", "fisica_aplicada_para_el_movimiento_humano"] },
  { id: "bioetica_y_profesion", nombre: "Bioética y profesión", requisitos: [] },
  { id: "exploracion_kinesica", nombre: "Exploración kinésica", requisitos: ["anatomia_funcional_basica"] },
  { id: "educacion_fisica_y_salud", nombre: "Educación física y salud", requisitos: [] },
  { id: "neuroanatomia_funcional", nombre: "Neuroanatomía funcional", requisitos: ["anatomia_aplicada_al_movimiento_humano"] },
  { id: "comunicacion_en_lengua_inglesa_nivel_intermedio", nombre: "Comunicación en lengua inglesa nivel intermedio", requisitos: ["comunicacion_en_lengua_inglesa_nivel_basico"] },
  { id: "examen_kinesico", nombre: "Examen kinésico", requisitos: ["exploracion_kinesica"] },
  { id: "salud_publica", nombre: "Salud pública", requisitos: ["socioantropologia_de_la_salud"] }
];

const estado = {};
ramos.forEach(r => estado[r.id] = false);

const contenedor = document.getElementById('malla');

function renderMalla() {
  contenedor.innerHTML = '';
  ramos.forEach(ramo => {
    const div = document.createElement('div');
    div.classList.add('ramo');
    const desbloqueado = ramo.requisitos.every(req => estado[req]);
    if (!desbloqueado && !estado[ramo.id]) div.classList.add('bloqueado');
    if (estado[ramo.id]) div.classList.add('aprobado');
    div.textContent = ramo.nombre;
    div.title = desbloqueado ? 'Puedes aprobar este ramo' : 'Debes aprobar prerrequisitos';
    div.onclick = () => {
      if (!desbloqueado && !estado[ramo.id]) return;
      estado[ramo.id] = !estado[ramo.id];
      renderMalla();
    };
    contenedor.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', renderMalla);
