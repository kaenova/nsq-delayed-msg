import { Reader } from "nsqjs"

async function main() {
  const nsqClientReader = new Reader('delayed_topic', 'test_channel', {
    lookupdHTTPAddresses: 'nsqlookupd:4161'
  })

  nsqClientReader.connect()

  nsqClientReader.on("ready", () => {console.log("consumer ready")})
  
  nsqClientReader.on("error", () => {console.log("consumer error")})

  nsqClientReader.on("message", (msg) => {
    let date = new Date()
    let finalMsg = msg.body.toString()
    console.log(`${finalMsg} recieved ${date.toLocaleTimeString()}`)
    msg.finish()
  })
}

main()