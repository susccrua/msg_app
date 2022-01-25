const element = document.getElementById("q");
const element2 = document.getElementById("a");

const adjectives = ["Why", "How", "What", "Who"];
const modalVerbs = ["is", "do", "would", "will", "can", "are", "does", "makes"];
const subjects = ["cow", "dog", "kangaroo", "book", "chair"];
const verbs = ["explode", "jingle", "run", "swim", "eat"];
const verbs2 = ["exploding", "jingling", "running", "swimming", "eating"];
const answers = [
  "Apocalypse",
  "Survival",
  "Poor coping skills",
  "Drugs",
  "Hot Salsa",
  "Ratatouille",
  "Because Susana said so",
  "It will always be a mistery",
  "Advanced technology",
];

let question = constructQuestion();
let answer = constructAnswer();

element.innerHTML = question;
element2.innerHTML = answer;

function pickAdjective() {
  const index = Math.floor(Math.random() * adjectives.length);
  let adjective = adjectives[index];
  return adjective;
}

function pickModalVerb() {
  const index = Math.floor(Math.random() * modalVerbs.length);
  let modalVerb = modalVerbs[index];
  return modalVerb;
}

function pickSubject(modalVerb) {
  const index = Math.floor(Math.random() * subjects.length);
  if (modalVerb[modalVerb.length - 1] == "s") {
    return "the " + subjects[index];
  }
  return subjects[index] + "s";
}

function pickVerb(modalVerb) {
  let verb;
  if (modalVerb == "is" || modalVerb == "are") {
    const index = Math.floor(Math.random() * verbs2.length);
    verb = verbs2[index];
  } else {
    const index = Math.floor(Math.random() * verbs.length);
    verb = verbs[index];
  }
  return verb;
}

function constructQuestion() {
  const adjective = pickAdjective();
  const modalVerb = pickModalVerb();
  const subject = pickSubject(modalVerb);
  const verb = pickVerb(modalVerb);

  return `${adjective} ${modalVerb} ${subject} ${verb}?`;
  // return adjective
}

function constructAnswer() {
  const index = Math.floor(Math.random() * answers.length);
  return answers[index];
}
//question += constructQuestion();
