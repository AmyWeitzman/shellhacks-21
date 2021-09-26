export const sendNotification = (uid, email, url, report) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_COURIER_AUTH_TOKEN}`
    },
    body: JSON.stringify({
      event: process.env.REACT_APP_COURIER_NOTIFICATION_ID,
      recipient: uid,
      brand: process.env.REACT_APP_COURIER_BRAND,
      data: {
        url: url, 
        report: report
      },
      profile: {
        email: email
      }
    }) 
  };

  fetch('https://api.courier.com/send', options)
    .then(res =>  res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
}
