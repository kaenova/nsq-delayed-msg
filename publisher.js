import { Message, Writer } from "nsqjs"

async function main() {

  const nsqClient = new Writer("nsqd", "4150")

  nsqClient.connect()

  // On Error
  nsqClient.on("error", (err) => console.log(err))

  // On Ready
  nsqClient.on("ready", () => {

    // Send message every 2 seconds
    var counter = 1
    setInterval(() => {
      let date = new Date()
      let strMessage = `test message ${counter} on ${date.toLocaleTimeString()}`
      
      // Deffered a message for 5 seconds in the nsqd
      nsqClient.deferPublish("delayed_topic", [strMessage], 5000, () => {
        console.log(strMessage)
      })
      
      counter += 1
    }, 2000)

  })

}

main()