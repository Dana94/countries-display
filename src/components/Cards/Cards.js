import React, { useContext } from 'react';
import { useQuery, gql } from '@apollo/client';

import { FilterContext } from '../../context/filter-context';
import classes from './Cards.module.css'
import Card from '../Card/Card';
import Loading from '../Loading/Loading';


const Cards = (props) => {

    const filterContext = useContext(FilterContext);

    // console.log(filterContext);

    // population filter (ex: population_gt)
    // currency filter (ex: filter: {currencies_in: {code_in: ["DZD", "ARS"]}})

    let filterLang = { officialLanguages_some: { iso639_2_in: filterContext.languages } };

    const GET_COUNTRIES = gql`
        query GetCountry($filter: _CountryFilter) {
            Country(filter: $filter) {
                _id
                name
                flag {
                    svgFile
                }
                officialLanguages {
                    name
                }
                currencies {
                    name
                    _id
                }
                population
            }
        }
    `;

    const countries = useQuery(GET_COUNTRIES,
        {
            variables: {
                filter: filterLang
            }
        }
    );

    if (countries.loading) {
        return (
            <div className={classes.Cards}>
                <Loading />
            </div>
        );
    }
    if (countries.error) {
        return (
            <div className={classes.Cards}>
                Error
            </div>
        );
    }

    return (
        <div className={classes.Cards}>
            {
                countries.data.Country.map(country => <Card country={country} key={country._id} />)
            }
        </div>
    )
}

export default Cards;
