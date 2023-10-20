import slugHandler from "@/pages/api/lanes";
import { NextApiRequest } from 'next';

it('should respond with 200 status and lanes data for a GET request', () => {
  const request: NextApiRequest = {
    method: 'GET',
    query: {
      slug: "maps",
    }
  } as unknown as NextApiRequest;

  const mockResponse: any = {
    status: jest.fn(function () {
      return this; 
    }),
    json: jest.fn(),
  };

  slugHandler(request, mockResponse);

  expect(mockResponse.status).toHaveBeenCalledWith(200);
})