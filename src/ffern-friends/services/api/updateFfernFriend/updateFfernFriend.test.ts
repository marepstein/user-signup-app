import FfernClient from '@/ffern-friends/services/axiosInstance';
import {
  mockFfernFriendUpdateRequest,
  mockInvalidFfernFriend,
} from '@/test/__mocks__';
import { z } from 'zod';
import { updateFfernFriendService } from './updateFfernFriend';

jest.mock('@/ffern-friends/services/axiosInstance');

const mockedFfernClient = FfernClient as jest.Mocked<typeof FfernClient>;

describe('updateFfernFriendService', () => {
  const ffernFriendId = '12345';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update the Ffern friend successfully', async () => {
    mockedFfernClient.post.mockResolvedValueOnce({
      data: mockFfernFriendUpdateRequest,
    });

    const result = await updateFfernFriendService(
      ffernFriendId,
      mockFfernFriendUpdateRequest
    );

    expect(result).toEqual(mockFfernFriendUpdateRequest);
    expect(FfernClient.post).toHaveBeenCalledWith(
      `/ffern-friends/${ffernFriendId}`,
      mockFfernFriendUpdateRequest
    );
  });

  it('should throw an error if ffernFriendId is empty', async () => {
    await expect(
      updateFfernFriendService('', mockFfernFriendUpdateRequest)
    ).rejects.toThrow('ffernFriendId is required and cannot be empty.');
  });

  it('should throw a ZodError if data does not match the schema', async () => {
    await expect(
      updateFfernFriendService(ffernFriendId, mockInvalidFfernFriend)
    ).rejects.toThrow(z.ZodError);
  });
});
