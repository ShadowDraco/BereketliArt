import sendInquiryEmail from '../../../../../../mailgun/sendInquiryEmail';

type InquiryParams = {
  email: 'string';
  painting: 'string';
  name: 'string';
  message: 'string';
};
export async function POST(req: Request, route: { params: InquiryParams }) {
  const inquiry = { ...route.params };

  try {
    await sendInquiryEmail(inquiry);
    console.log('Email sent successfully');
    return new Response(
      JSON.stringify({
        success: 'success',
        message: 'Request received',
        status: 200,
        statusText: 'Your inquiry has been received!',
      })
    );
  } catch (error) {
    console.log('ERROR sending INQUIRY EMAIL', error);
    return new Response(
      JSON.stringify({
        success: 'failed',
        message: 'Request received',
        status: 500,
        statusText: 'There was an error, please try again later.',
      })
    );
  }
}
