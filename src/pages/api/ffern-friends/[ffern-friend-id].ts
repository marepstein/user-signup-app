import {
  getFfernFriendService,
  updateFfernFriendService,
} from '@/ffern-friends/services/api';
import { EHttpMethod, IService } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    | IService.TGetFfernFriendResponse
    | IService.TUpdateFfernFriendsRequest
    | IService.TUpdateFfernFriendsErrorResponse
  >
) {
  const { method, query } = req;
  const ffernFriendId = query['ffern-friend-id'];

  try {
    if (typeof ffernFriendId !== 'string') {
      return res.status(400).json({
        error: 'ffern-friend:-id is required',
        message: 'The ffern-friend-id parameter is missing or invalid.',
      });
    }
    if (method === EHttpMethod.GET) {
      const response = await getFfernFriendService(ffernFriendId);

      return res.status(200).json(response);
    } else if (method === EHttpMethod.POST) {
      const response = await updateFfernFriendService(ffernFriendId, req.body);

      return res.status(200).json(response);
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.name, message: error.message });
    }

    res.status(500).json({
      error: 'An unknown error occurred.',
      message: 'An unexpected error occurred on the server.',
    });
  }
}
