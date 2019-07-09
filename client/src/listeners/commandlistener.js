export default async command => {
    command = command.split(' ');

    console.log(command[0]);

    switch(command[0]) {
        case 'help':
            return `HELP     Shows this dialog`
            break;
        case 'download':
            
            break;
        default: 
            return 'The given command does not exist'
    }
}