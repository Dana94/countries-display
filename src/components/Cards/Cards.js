import React, { useContext } from 'react';
import { useQuery, gql } from '@apollo/client';

import { FilterContext } from '../../context/filter-context';
import classes from './Cards.module.css'
import Card from '../Card/Card';
// import Modal from '../Modal/Modal';
import Loading from '../Messages/Loading/Loading';
import Error from '../Messages/Error/Error';
import NoResults from '../Messages/NoResults/NoResults';

const Cards = (props) => {

    const filterContext = useContext(FilterContext);

    let filters = {
        officialLanguages_some: { iso639_2_in: filterContext.languages },
        currencies_some: { code_in: filterContext.currencies }
    };

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
            }
        }
    `;

    const countries = useQuery(GET_COUNTRIES,
        {
            variables: {
                filter: filters
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
                <Error />
            </div>
        );
    }
    if (countries.data.Country.length === 0) {
        return (
            <div className={classes.Cards}>
                <NoResults />
            </div>
        );
    }

    return (
        <div className={classes.Cards}>
            {
                countries.data.Country.map(country => <Card country={country} key={country._id} />)
            }
            {/* <Modal /> */}
        </div>
    )
}

export default Cards;
