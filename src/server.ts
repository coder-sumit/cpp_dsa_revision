function welcome(name: string) {
    console.log('Welcome to Pizza App!' + name);
}

const user = {
    name: 'Sumit',
};

const u1 = user.name;

welcome(u1);

welcome('Sumit');
