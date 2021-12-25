// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

// Not sure what to specifically return here
// I'll just return the request body + the response request bin
interface ResponsePayload {
  name: string;
  eventType: string;
  email: string;
  result: string;
}

export default async function asynchandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponsePayload | {message: string}>,
) {
  const {name, eventType, email} = req.body;

  if (req.body.eventType === 'failed') {
    return res.status(400).send({
      message: 'An error has occur(Force Fail)',
    });
  }

  try {
    const result = await fetch(`${process.env.REQUEST_BIN_URL}`, {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({
        name,
        eventType,
        email,
      }),
    }).then((res: any) => res.text());

    res.status(200).json({
      result,
      name,
      eventType,
      email,
    });
  } catch (e) {
    res.status(500).send({
      message: e as string,
    });
  }
}
