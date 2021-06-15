const questions = [
  "O que eu aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou felix hoje?",
  "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
  process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
      ask(answers.length)
    } else {
      process.exit()
    }
})

process.on('exit', () => {
  console.log(`
  Bacana David!

  ${questions[0]}
  ${answers[0]}

  Volte amanhã para novas reflexões!!
  `)
})