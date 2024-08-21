const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está em uma reunião de grupo na escola e percebe que um colega está sendo excluído das discussões por causa de sua aparência. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Ignoro a situação, pois não quero me envolver em conflitos.",
                afirmacao: "Você opta por não se envolver e ignora a situação."
            },
            {
                texto: "Falo com o grupo para que todos incluam o colega nas discussões e reforço a importância de respeitar a diversidade.",
                afirmacao: "Você intervém e promove a inclusão do colega na discussão."
            }
        ]
    },
    {
        enunciado: "Durante uma atividade em sala de aula, um professor faz um comentário que você acha ofensivo para um grupo de alunos. O que você faz?",
        alternativas: [
            {
                texto: "Fico em silêncio e espero que a situação passe.",
                afirmacao: "Você decide não agir e esperar que a situação se resolva sozinha."
            },
            {
                texto: "Conversa com o professor após a aula para expressar seu desconforto e sugerir uma abordagem mais inclusiva.",
                afirmacao: "Você aborda o professor sobre o comentário e sugere uma abordagem mais inclusiva."
            }
        ]
    },
    {
        enunciado: "Você recebe um trabalho em grupo e descobre que um dos membros do grupo está sendo tratado de forma diferente devido ao seu gênero. Como você reage?",
        alternativas: [
            {
                texto: "Aceito a situação como está e foco apenas na conclusão do trabalho.",
                afirmacao: "Você aceita a situação e foca apenas na conclusão do trabalho."
            },
            {
                texto: "Falo com os membros do grupo sobre a importância de tratar todos com igualdade e garantir que todos tenham a mesma oportunidade de contribuir.",
                afirmacao: "Você aborda a questão de desigualdade e promove a igualdade no grupo."
            }
        ]
    },
    {
        enunciado: "Você está ajudando a organizar um evento escolar e percebe que alguns alunos de diferentes origens culturais não estão sendo considerados nas decisões. O que você faz?",
        alternativas: [
            {
                texto: "Continuo com a organização como planejado, sem fazer mudanças.",
                afirmacao: "Você continua a organização sem considerar as diferentes origens culturais."
            },
            {
                texto: "Sugiro a inclusão de representantes de diferentes origens culturais na equipe de organização para garantir que todos sejam considerados.",
                afirmacao: "Você propõe a inclusão de representantes de diferentes origens culturais na organização."
            }
        ]
    },
    {
        enunciado: "Em uma discussão sobre oportunidades de emprego no futuro, um colega menciona que algumas pessoas têm menos chances por causa de sua orientação sexual. Como você responde?",
        alternativas: [
            {
                texto: "Acredito que isso não é um problema significativo e que as oportunidades são iguais para todos.",
                afirmacao: "Você minimiza o problema e acredita que as oportunidades são iguais para todos."
            },
            {
                texto: "Reconheço que a orientação sexual pode influenciar as oportunidades e defendo a importância de políticas que promovam a igualdade de oportunidades para todos.",
                afirmacao: "Você reconhece a influência da orientação sexual nas oportunidades e defende políticas de igualdade."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ""; // Limpa as alternativas antes de adicionar novas
    mostraAlternativas();
}

function mostraAlternativas() {
    perguntaAtual.alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Reflexão sobre Preconceito...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = ""; // Limpa alternativas no resultado
}

mostraPergunta();
