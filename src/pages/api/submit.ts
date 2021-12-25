// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

// Not sure what to specifically return here
// I'll just return the request body
interface ResponsePayload {
  name: string;
  eventType: string;
  email: string;
}

export default async function asynchandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponsePayload | {message: string}>,
) {
  const {name, eventType, email} = req.body;

  await fetch(`${process.env.REQUEST_BIN_URL}`, {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify({
      name,
      eventType,
      email,
    }),
  }).then((res: any) => res.text());

  res.status(200).json({
    name,
    eventType,
    email,
  });
}
