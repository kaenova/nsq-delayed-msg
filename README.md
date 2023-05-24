# NSQ Delayed (Deffered) Message

Just a test on how NSQ deferred message works.

![Logs](/logs.png)

As you can see, the consumer has a 5-second delay on the sent message. This can be used to trigger cancellation events for e-commerce sites with reliable messaging.

To run:
```sh
docker compose up -d
```