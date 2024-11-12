import { IMessage } from './../models/IMessage'

async function hof(messages: IMessage[], apiKey: string): Promise<IMessage[]> {
	console.log('apiKey', apiKey)

	if (apiKey) {
		return await fetchFromOpenAi(messages, apiKey)
	} else {
		return await takeMockData(messages)
	}
}

async function fetchFromOpenAi(messages: IMessage[], apiKey: string) {
	const response = await fetch('https://api.openai.com/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${apiKey}`,
		},
		body: JSON.stringify({
			model: 'gpt-3.5-turbo',
			messages: [...messages],
		}),
	})
	const data = await response.json()

	if (data.error) {
		throw new Error(data.error.message)
	}

	const assistantMessage = {
		content: data?.choices[0].message.content,
		role: 'assistant',
	} as IMessage

	return new Promise<IMessage[]>((resolve, reject) => {
		if (data.error) {
			reject(data.error)
		} else {
			resolve([...messages, assistantMessage])
		}
	})
}

async function takeMockData(messages: IMessage[]) {
	const assistantResponses = [
		'Hello!',
		'Hi there!',
		'Greetings!',
		'How can I assist you today?',
		'Good to see you!',
		'I am here to help!',
		'What can I do for you?',
		'How can I help you?',
		'What do you want to know?',
		'Can I help you with anything?',
		'What can I do for you today?',
	]

	const assistantMessage = {
		content:
			assistantResponses[Math.floor(Math.random() * assistantResponses.length)],
		role: 'assistant',
	} as IMessage

	return new Promise<IMessage[]>(resolve => {
		setTimeout(() => {
			resolve([...messages, assistantMessage])
		}, 1000)
	})
}

export default hof
