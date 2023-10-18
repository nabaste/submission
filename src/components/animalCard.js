'use client';

import {Card, Progress, Badge} from 'flowbite-react';


export default function AnimalCard(props) {

    const animalInfo = [
        {
            name: "Eagle",
            text: "Eagles are large, powerfully-built birds of prey, with heavy heads and beaks. Even the smallest eagles, " +
                "such as the booted eagle (Aquila pennata), which is comparable in size to a common buzzard (Buteo buteo) " +
                "or red-tailed hawk (B. jamaicensis), have relatively longer and more evenly broad wings, and more direct, " +
                "faster flight – despite the reduced size of aerodynamic feathers.",
            img: "img/eagle.jpg",
            role: "Apex Predator",
            color: "failure",
            number1: 50,
            number2: 30,
            number3: 20,
            region1: "North America",
            region2: "Asia",
            region3: "Europe"

        },
        {
            name: "Owl",
            text: "Owls are birds from the order Strigiformes, which includes over 200 species " +
                "of mostly solitary and nocturnal birds of prey typified by an upright stance, " +
                "a large, broad head, binocular vision, binaural hearing, sharp talons, and feathers adapted for silent flight",
            img: "img/owl.jpg",
            role: "Mesopredator",
            color: "warning",
            number1: 80,
            number2: 14,
            number3: 6,
            region1: "Europe",
            region2: "Asia",
            region3: "America"
        },
        {
            name: "Ocelot",
            text: "The ocelot (Leopardus pardalis) is a medium-sized spotted wild cat that reaches 40–50 cm " +
                "(15.7–19.7 in) at the shoulders and weighs between 7 and 15.5 kg (15.4 and 34.2 lb) on average. " +
                "It is native to the southwestern United States, Mexico, Central and South America, " +
                "and the Caribbean islands of Trinidad and Margarita.",
            img: "img/ocelot.jpg",
            role: "Mesopredator",
            color: "warning",
            number1: 70,
            number2: 20,
            number3: 10,
            region1: "South America",
            region2: "Africa",
            region3: "Australia"
        },
        {
            name: "Sloth",
            text: "Sloths are a Neotropical group of xenarthran mammals constituting the suborder Folivora, " +
                "including the extant arboreal tree sloths and extinct terrestrial ground sloths. Noted for their " +
                "slowness of movement, tree sloths spend most of their lives hanging upside down in the trees of the tropical " +
                "rainforests of South America and Central America.",
            img: "img/sloth.jpg",
            role: "Prey",
            color: "info",
            number1: 40,
            number2: 40,
            number3: 20,
            region1: "Mesoamerica",
            region2: "Australia",
            region3: "Asia"
        },
        {
            name: "Capybara",
            text: "The capybara (Hydrochoerus hydrochaeris) is a giant cavy rodent native to South America. " +
                "It is the largest living rodent and a member of the genus Hydrochoerus. " +
                "Its close relatives include guinea pigs and rock cavies, and it is more distantly " +
                "related to the agouti, the chinchilla, and the nutria.",
            img: "img/capybara.jpg",
            role: "Prey",
            color: "info",
            number1: 60,
            number2: 30,
            number3: 10,
            region1: "South America",
            region2: "North Africa",
            region3: "Europe"
        }
    ]

    return (
        <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={animalInfo[props.animal].img}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {animalInfo[props.animal].name}
            </h5>
            <Badge className="w-1/5"  color={animalInfo[props.animal].color}> {animalInfo[props.animal].role} </Badge>
            <p className="font-normal text-gray-700 max-w-lg dark:text-gray-400">
                {animalInfo[props.animal].text}
            </p>
            <h6 className="font-bold tracking-tight text-gray-900 dark:text-white">Population Distribution</h6>
            <div className="text-blue-950">
                <Progress
                    labelText
                    progress={animalInfo[props.animal].number1}
                    size="lg"
                    textLabel={animalInfo[props.animal].region1}
                    textLabelPosition="outside"
                />
                <Progress
                    labelText
                    progress={animalInfo[props.animal].number2}
                    size="lg"
                    textLabel={animalInfo[props.animal].region2}
                    textLabelPosition="outside"
                />
                <Progress
                    labelText
                    progress={animalInfo[props.animal].number3}
                    size="lg"
                    textLabel={animalInfo[props.animal].region3}
                    textLabelPosition="outside"
                />
            </div>
        </Card>
    )
}


