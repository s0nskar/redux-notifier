const notifier = store => next => action => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification")
    } else if (Notification.permission === "granted") {
      let notification = new Notification(action.type)
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
          if (permission === "granted") {
            var notification = new Notification("Hi there!")
          }
        })
    } else {
      let again = confirm("You denied permission for notifications")
    }

    let result = next(action)
    return result
}

export default notifier;