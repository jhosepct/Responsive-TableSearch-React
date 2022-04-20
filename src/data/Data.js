
export const columns = [
 
    {
        id: 'code',
        label: 'ISO\u00a0Code',
        maxWidth: 50,
        align: 'center',
        typeData: 'string',
        order: 'true',

    },
    {
        id: 'name',
        label: 'Name',
        maxWidth: 80,
        typeData: 'string',
        order: 'true'
    },
    {
        id: 'population',
        label: 'Population',
        maxWidth: 100,
        align: 'right',
        typeData: 'number',
        order: 'true'
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        maxWidth: 100,
        align: 'right',        
        typeData: 'number',
        order: 'true'
    },
    {
        id: 'density',
        label: 'Density',
        maxWidth: 150,
        align: 'right',
        typeData: 'number',
        order: 'true'
    },

];


function createData(name, code, population, size, detail) {
    const density = population / size;
    return { name, code, population, size, density, detail };
}

export const rows = [
    createData('Perú', 'PE', 33819048, 1285000,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam similique saepe voluptas mollitia obcaecati corporis facilis veritatis deleniti! Ratione error quisquam esse soluta, libero quas adipisci. Accusantium, voluptatem quae.Rem iusto quis eum amet cum architecto suscipit reprehenderit dignissimos veritatis ipsam. Delectus minus voluptatum repellat! Doloremque ullam aperiam eum dolorem quae magnam, itaque neque placeat autem, vero corrupti possimus! ad.'),
    createData('India', 'IN', 1324171354, 3287263, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam similique saepe voluptas mollitia obcaecati corporis facilis veritatis deleniti! Ratione error quisquam esse soluta, libero quas adipisci. Accusantium, voluptatem quae.Rem iusto quis eum amet cum architecto suscipit reprehenderit dignissimos veritatis ipsam. Delectus minus voluptatum repellat! Doloremque ullam aperiam eum dolorem quae magnam, itaque neque placeat autem, vero corrupti possimus! ad.'),
    createData('China', 'CN', 1403500365, 9596961, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad.'),
    createData('Italy', 'IT', 60483973, 301340, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad.'),
    createData('United States', 'US', 327167434, 9833520, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad.'),
    createData('Canada', 'CA', 37602103, 9984670, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad.'),
    createData('Australia', 'AU', 25475400, 7692024, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad.'),
    createData('Germany', 'DE', 83019200, 357578, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad.'),
    createData('Ireland', 'IE', 4857000, 70273, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam similique saepe voluptas mollitia obcaecati corporis facilis veritatis deleniti! Ratione error quisquam esse soluta, libero quas adipisci. Accusantium, voluptatem quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad.'),
    createData('Mexico', 'MX', 126577691, 1972550, '                                  Rem iusto quis eum amet cum architecto suscipit reprehenderit dignissimos veritatis ipsam. Delectus minus voluptatum repellat! Doloremque ullam aperiam eum dolorem quae magnam, itaque neque placeat autem, vero corrupti possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad.'),
    createData('Japan', 'JP', 126317000, 377973, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad.'),
    createData('France', 'FR', 67022000, 640679, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad.'),
    createData('United Kingdom', 'GB', 67545757, 242495, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad.'),
    createData('Russia', 'RU', 146793744, 17098246, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad.'),
    createData('Nigeria', 'NG', 200962417, 923768, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad.'),
    createData('Brazil', 'BR', 210147125, 8515767, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad.'),

];
