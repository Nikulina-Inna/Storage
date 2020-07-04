import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import MainPage from './pages/mainPage';
import CatalogPage from './pages/catalogPage';
import HelpPage from './pages/helpPage';
import ItemCardPage from './pages/itemCardPage';
import UserCabinetPAge from './pages/userCabinetPage';
import BusketPage from './pages/busketPage';
import OrderFinishPage from './pages/orderCheckPage';
import AdminCabinet from './pages/adminCabinet';

export const useRoutes = () => {
        return (
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/catalog" exact>
                    <CatalogPage />
                </Route>
                <Route path="/help" exact>
                    <HelpPage />
                </Route>
                <Route path="/itemCard/:id" >
                    <ItemCardPage />
                </Route>
                <Route path="/userCabinet/:id">
                    <UserCabinetPAge />
                </Route>
                <Route path="/busket/:id">
                    <BusketPage />
                </Route>
                <Route path="/orderFinish/:id">
                    <OrderFinishPage />
                </Route>
                <Route path="/adminCabinet" exact>
                    <AdminCabinet />
                </Route>
                <Redirect to="/" />
            </Switch>
        )
}