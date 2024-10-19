const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function datetime_full(input: string) {
    const date = new Date(input);
    let time = time_24(input, false);

    return `${days[date.getDay()]}, ${time}, ${getDateLocal(date)} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export function datetime_med(input: string) {
    const date = new Date(input);
    let time = time_24(input, false);

    return `${time}, ${getDateLocal(date)} ${months[date.getMonth()]} ${date.getFullYear()}`;
}


export function date_full(input: string) {
    const date = new Date(input);

    return `${days[date.getDay()]}, ${getDateLocal(date)} ${months[date.getMonth()]} ${date.getFullYear()}`;
}


export function date_med(input: string) {
    const date = new Date(input);

    return `${getDateLocal(date)} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export function date_small(input: string) {
    const date = new Date(input);

    return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`;
}


export function date_inter(input: string) {
    const date = new Date(input);

    return `${date.getFullYear()}-${getInter(date.getMonth())}-${getInter(date.getDate())}`;
}


export function time_24(input: string, showSeconds: boolean = true) {
    const date = new Date(input);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${showSeconds && (seconds < 10 ? "0" + seconds : seconds)}`;
}


export function time_12(input: string) {
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

    return `${hours}:${date.getMinutes()}:${date.getSeconds()} ${(am ? "AM" : "PM")}`;
}

export function to_django_date(input: string) {
    const date = new Date(input);

    return date.toISOString();
}

function getDateLocal(date: Date) {
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

    return `${day}${end}`;
}

function getInter(date: number) {
    return date < 10 ? "0" + date : date;
}

