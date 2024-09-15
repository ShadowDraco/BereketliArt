import sendInquiryEmail from '../../../../../../mailgun/sendInquiryEmail';
export async function POST(req, params) {
  const inquiry = { ...params.params };

  try {
    await sendInquiryEmail(inquiry);
    console.log('Email sent successfully');
    return new Response(
      JSON.stringify({
        success: 'success',
        message: 'Request received',
        status: 200,
        statusText: 'Your request has been received',
      })
    );
  } catch (error) {
    console.log('ERROR sending APPOINTMENT EMAIL', error);
    return new Response(
      JSON.stringify({
        success: 'failed',
        message: 'Request received',
        status: 500,
        statusText: 'There was an error',
      })
    );
  }
}
