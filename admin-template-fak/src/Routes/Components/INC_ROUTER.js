import { Login, PagesComponents, Slash } from 'Pages';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import ErrorFallback from 'Pages/ErrorFalback'
// import loadable from '@loadable/component'

const INC_ROUTER = ({ VAL_HALAMAN }) => {

    return (
        <Routes>
            <Route exact path={"/Login"} element={<Login />} />
            <Route exact path={"/"} element={<Slash />} />
            <Route exact path={"/Components"} element={<PagesComponents />} />
        </Routes>
    );

    // ===================A1. GUNAKAN BILA MENGGUNAKAN DB ===============
    //URL_STATIS SELALU ADA
    // const BaseRoutes = [
    //     {
    //         id: 'Login',
    //         url: '/Login',
    //         component: () => import('Pages/Login'),
    //     },
    //     {
    //         id: 'Coba',
    //         url: '/',
    //         component: () => import('Pages/Coba'),
    //     },
    //     {
    //         id: '404',
    //         url: '*',
    //         component: () => import('Pages/Eror404'),
    //     },
    // ]

    // //URL DINAMIS DARI DB
    // const DynamicRoutes = [
    //     {
    //         id: 'Terima',
    //         component: () => import('Pages/Terima'),
    //     },
    //     {
    //         id: 'Racik',
    //         component: () => import('Pages/Racik'),
    //     },
    //     {
    //         id: 'Etiket',
    //         component: () => import('Pages/Etiket'),
    //     },
    //     {
    //         id: 'Serah',
    //         component: () => import('Pages/Serah'),
    //     },
    //     {
    //         id: 'TRE',
    //         component: () => import('Pages/TRE'),
    //     },
    //     {
    //         id: 'TerimaDetail',
    //         component: () => import('Pages/TerimaDetail'),
    //     },
    //     // {
    //     //   // ORIGINAL
    //     //   id: 'TREDetail',
    //     //   component: () => import('Pages/TREDetail'),
    //     // },
    //     {
    //         id: 'TREDetail',
    //         component: () => import('Pages/TREDetail_V1'),
    //     },
    //     {
    //         id: 'SerahDetail',
    //         component: () => import('Pages/SerahDetail'),
    //     },
    //     {
    //         id: 'CariPasien',
    //         component: () => import('Pages/CariPasien'),
    //     },
    //     {
    //         id: 'CariPasienDetail',
    //         component: () => import('Pages/CariPasienDetail'),
    //     },import Slash from './../../Pages/Slash/Slash';

    // ]

    // const Pages = VAL_HALAMAN.map((o) => o.menu_nama)

    // const Paths = VAL_HALAMAN.reduce(
    //     (prev, o) => Object.assign(prev, { [o.menu_nama]: o.url }),
    //     {},
    // )

    // const AvailableRoutes = DynamicRoutes.filter(
    //     (o) => Pages.indexOf(o.id) >= 0,
    // ).map((o) => Object.assign({}, o, { url: Paths[o.id] }))

    // const AllRoutes = [...AvailableRoutes, ...BaseRoutes]

    // // console.log({ Pages, Paths, AvailableRoutes, AllRoutes })

    // return (
    //     <Routes>
    //         {AllRoutes.map((v, i) => {
    //             const TMPComponent = loadable(v.component, {
    //                 fallback: <ErrorFallback />,
    //             })

    //             return <Route path={v.url} element={<TMPComponent />} exact key={i} />
    //         })}
    //     </Routes>
    // )

    //   ===============================END A1.===========================
}

export default INC_ROUTER