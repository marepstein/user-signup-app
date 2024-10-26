import FfernClient from '@/ffern-friends/services/axiosInstance';
import { getFfernFriendService } from './getFfernFriend';

jest.mock('@/ffern-friends/services/axiosInstance');

const mockedFfernClient = FfernClient as jest.Mocked<typeof FfernClient>;

describe('getFfernFriendService', () => {
  const ffernFriendId = '12345';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch the Ffern friend successfully', async () => {
    const mockResponse = { name: 'John Doe', id: ffernFriendId };

    mockedFfernClient.get.mockResolvedValueOnce({
      data: mockResponse,
    });

    const result = await getFfernFriendService(ffernFriendId);
    expect(result).toEqual(mockResponse);
    expect(FfernClient.get).toHaveBeenCalledWith(
      `/ffern-friends/${ffernFriendId}`
    );
  });

  it('should throw an error if ffernFriendId is empty', async () => {
    await expect(getFfernFriendService('')).rejects.toThrow(
      'ffernFriendId is required and cannot be empty.'
    );
  });

  it('should throw a "Friend ID not found" error on 404', async () => {
    mockedFfernClient.get.mockRejectedValueOnce({
      isAxiosError: true,
      response: { status: 404 },
    });

    await expect(getFfernFriendService(ffernFriendId)).rejects.toThrow(
      'Friend ID not found'
    );
  });

  it('should log an error for non-axios errors', async () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const error = new Error('Some other error');

    mockedFfernClient.get.mockRejectedValueOnce(error);

    await expect(getFfernFriendService(ffernFriendId)).rejects.toThrow(error);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'GetFfernFriendServiceError ::',
      error
    );

    consoleErrorSpy.mockRestore();
  });
});
