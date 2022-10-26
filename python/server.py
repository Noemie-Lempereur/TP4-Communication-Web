import asyncio
import websockets


async def hello(websocket, path):
    receivedMessage = await websocket.recv()
    print("Message reçu : " + receivedMessage)
    messageTosend = "Hi Client!"
    await websocket.send(messageTosend)


start_server = websockets.serve(hello, "localhost", 7525)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
