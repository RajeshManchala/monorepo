import { NextRouter, useRouter } from 'next/dist/client/router';

const BuyUsedCar = (): JSX.Element => {
    const router: NextRouter = useRouter();
    const { query: { carMakeModel, city } } = router;

    return (
        <div>{`Buy ${carMakeModel as string} Car in ${city as string}`}</div>
    );
};

export default BuyUsedCar;
