--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: businesses; Type: TABLE; Schema: public; Owner: tpl2021
--

CREATE TABLE public.businesses (
    id integer NOT NULL,
    bname text,
    btype text,
    city text,
    country text,
    valet boolean,
    publictransit text,
    lift boolean,
    lifttype text,
    updated timestamp without time zone
);


ALTER TABLE public.businesses OWNER TO tpl2021;

--
-- Name: businesses_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl2021
--

CREATE SEQUENCE public.businesses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.businesses_id_seq OWNER TO tpl2021;

--
-- Name: businesses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl2021
--

ALTER SEQUENCE public.businesses_id_seq OWNED BY public.businesses.id;


--
-- Name: businesses id; Type: DEFAULT; Schema: public; Owner: tpl2021
--

ALTER TABLE ONLY public.businesses ALTER COLUMN id SET DEFAULT nextval('public.businesses_id_seq'::regclass);


--
-- Data for Name: businesses; Type: TABLE DATA; Schema: public; Owner: tpl2021
--

COPY public.businesses (id, bname, btype, city, country, valet, publictransit, lift, lifttype, updated) FROM stdin;
2	Scandic Anglais	Hotel	Stockholm	Sweden	\N	\N	t	\N	\N
1	Scandic Aarhus City	Hotel	Aarhus	Denmark	\N	\N	t	\N	\N
3	Scandic Berlin Potsdamer Plats	Hotel	Berlin	Berlin	\N	\N	t	\N	\N
5	Scandic Continental	Hotel	Sweden	Sweden	\N	\N	t	\N	\N
4	Scandic Bygholm Park	Hotel	Denmark	Denmark	\N	\N	t	\N	\N
\.


--
-- Name: businesses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl2021
--

SELECT pg_catalog.setval('public.businesses_id_seq', 5, true);


--
-- Name: businesses businesses_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl2021
--

ALTER TABLE ONLY public.businesses
    ADD CONSTRAINT businesses_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

