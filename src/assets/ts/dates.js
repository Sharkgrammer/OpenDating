const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function datetime_full(input) {
    const date = new Date(input);
    let time = time_24(input, false);

    return days[date.getDay()] + ", " + time + ", " + getDateLocal(date) + " " + months[date.getMonth()] + " " + date.getFullYear()
}

export function datetime_med(input) {
    const date = new Date(input);
    let time = time_24(input, false);

    return time + ", " + getDateLocal(date) + " " + months[date.getMonth()] + " " + date.getFullYear()
}


export function date_full(input) {
    const date = new Date(input);


    return days[date.getDay()] + ", " + getDateLocal(date) + " " + months[date.getMonth()] + " " + date.getFullYear()
}


export function date_med(input) {
    const date = new Date(input);

    return getDateLocal(date) + " " + months[date.getMonth()] + " " + date.getFullYear()
}

export function date_small(input) {
    const date = new Date(input);

    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}


export function date_inter(input) {
    const date = new Date(input);

    return date.getFullYear() + "-" + getInter(date.getMonth()) + "-" + getInter(date.getDate());
}


export function time_24(input, showSeconds = true) {
    const date = new Date(input);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return hours + ":" + minutes + (showSeconds ? (":" + seconds) : "");
}


export function time_12(input) {
    const date = new Date(input);

    let am = true, noon = false;
    let hours = date.getHours();

    if (hours > 11) {
        if (hours === 12) {
            noon = true
        }
        am = false
    }

    if (!am && !noon) {
        hours -= 12
    }

    return hours + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + (am ? "AM" : "PM");
}

export function to_django_date(input) {
    const date = new Date(input);

    return date.toISOString();
}

function getDateLocal(date) {
    let day = date.getDate();
    let end = "";
    let tempday = day;

    while (tempday > 10) {
        tempday -= 10
    }

    switch (tempday) {
        case 1:
            end = "st";
            break;
        case 2:
            end = "nd";
            break;
        case 3:
            end = "rd";
            break;
        default:
            end = "th";
            break;
    }

    return day + end;
}

function getInter(date) {
    if (date < 10) {
        date = "0" + date;
    }
    return date;
}

