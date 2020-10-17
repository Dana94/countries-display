import React, { useContext } from 'react';
import { useQuery, gql } from '@apollo/client';

import { FilterContext } from '../../context/filter-context';
import classes from './Cards.module.css'
import Card from '../Card/Card';
import Loading from '../Messages/Loading/Loading';
import Error from '../Messages/Error/Error';
import NoResults from '../Messages/NoResults/NoResults';

const Cards = (props) => {

    const filterContext = useContext(FilterContext);
    // population filter (ex: population_gt)

    // let filters = {
    //     officialLanguages_some: { iso639_2_in: filterContext.languages },
    //     currencies_some: { code_in: filterContext.currencies }
    // };

    // const GET_COUNTRIES = gql`
    //     query GetCountry($filter: _CountryFilter) {
    //         Country(filter: $filter) {
    //             _id
    //             name
    //             flag {
    //                 svgFile
    //             }
    //             officialLanguages {
    //                 name
    //             }
    //             currencies {
    //                 name
    //                 _id
    //             }
    //             population
    //         }
    //     }
    // `;

    // const countries = useQuery(GET_COUNTRIES,
    //     {
    //         variables: {
    //             filter: filters
    //         }
    //     }
    // );

    let maxPopulation = 0;
    let minPopulation = 0;

    if (props.countries.data) {
        props.countries.data.forEach(country => {
            if (minPopulation === 0) {
                minPopulation = country.population
            }
            if (country.population > maxPopulation) {
                maxPopulation = country.population;
            }
            else if (country.population < minPopulation) {
                minPopulation = country.population;
            }
        });

        filterContext.setMaxPopulation(maxPopulation);
        filterContext.setMinPopulation(minPopulation);
    }


    if (props.countries.loading) {
        return (
            <div className={classes.Cards}>
                <Loading />
            </div>
        );
    }
    if (props.countries.error) {
        return (
            <div className={classes.Cards}>
                <Error />
            </div>
        );
    }
    if (props.countries.data.length === 0) {
        return (
            <div className={classes.Cards}>
                <NoResults />
            </div>
        );
    }

    return (
        <div className={classes.Cards}>
            {
                props.countries.data.map(country => <Card country={country} key={country._id} />)
            }
        </div>
    )
}

export default Cards;
