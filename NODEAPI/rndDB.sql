--
-- PostgreSQL database dump
--

-- Dumped from database version 11.6
-- Dumped by pg_dump version 11.6

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

SET default_with_oids = false;

--
-- Name: account; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.account (
    account_id integer NOT NULL,
    username character varying(50),
    password character varying(50),
    teacher_id integer,
    account_type character varying(50)
);


ALTER TABLE public.account OWNER TO postgres;

--
-- Name: attendance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.attendance (
    attendance_id integer NOT NULL,
    student_of_course_id integer,
    status boolean,
    date_check date
);


ALTER TABLE public.attendance OWNER TO postgres;

--
-- Name: attendance_attendance_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.attendance_attendance_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.attendance_attendance_id_seq OWNER TO postgres;

--
-- Name: attendance_attendance_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.attendance_attendance_id_seq OWNED BY public.attendance.attendance_id;


--
-- Name: class; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.class (
    class_id integer NOT NULL,
    total integer,
    class_name character varying(50)
);


ALTER TABLE public.class OWNER TO postgres;

--
-- Name: course; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course (
    course_id character varying(50) NOT NULL,
    course_name character varying(50),
    course_start_date date,
    course_end_date date
);


ALTER TABLE public.course OWNER TO postgres;

--
-- Name: face_image; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.face_image (
    face_image_id integer NOT NULL,
    face_image_url character varying(200),
    student_id integer
);


ALTER TABLE public.face_image OWNER TO postgres;

--
-- Name: face_image_face_image_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.face_image_face_image_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.face_image_face_image_id_seq OWNER TO postgres;

--
-- Name: face_image_face_image_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.face_image_face_image_id_seq OWNED BY public.face_image.face_image_id;


--
-- Name: student; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student (
    student_id integer NOT NULL,
    name character varying(50),
    email character varying(50),
    phone integer,
    gender boolean,
    class_id integer
);


ALTER TABLE public.student OWNER TO postgres;

--
-- Name: student_of_course; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student_of_course (
    student_of_course_id integer NOT NULL,
    student_id integer,
    course_id character varying(50)
);


ALTER TABLE public.student_of_course OWNER TO postgres;

--
-- Name: student_of_course_student_of_course_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.student_of_course_student_of_course_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.student_of_course_student_of_course_id_seq OWNER TO postgres;

--
-- Name: student_of_course_student_of_course_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.student_of_course_student_of_course_id_seq OWNED BY public.student_of_course.student_of_course_id;


--
-- Name: teacher; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teacher (
    teacher_id integer NOT NULL,
    name character varying(50),
    email character varying(50),
    phone integer,
    gender character varying(15)
);


ALTER TABLE public.teacher OWNER TO postgres;

--
-- Name: teacher_of_course; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teacher_of_course (
    teacher_of_course_id integer NOT NULL,
    teacher_id integer,
    course_id character varying(50)
);


ALTER TABLE public.teacher_of_course OWNER TO postgres;

--
-- Name: teacher_of_course_teacher_of_course_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.teacher_of_course_teacher_of_course_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teacher_of_course_teacher_of_course_id_seq OWNER TO postgres;

--
-- Name: teacher_of_course_teacher_of_course_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.teacher_of_course_teacher_of_course_id_seq OWNED BY public.teacher_of_course.teacher_of_course_id;


--
-- Name: tutorial; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tutorial (
    class_id uuid NOT NULL,
    total integer,
    class_name character varying(255)
);


ALTER TABLE public.tutorial OWNER TO postgres;

--
-- Name: tutorials; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tutorials (
    id integer NOT NULL,
    title character varying(255),
    description character varying(255),
    published boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.tutorials OWNER TO postgres;

--
-- Name: tutorials_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tutorials_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tutorials_id_seq OWNER TO postgres;

--
-- Name: tutorials_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tutorials_id_seq OWNED BY public.tutorials.id;


--
-- Name: attendance attendance_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendance ALTER COLUMN attendance_id SET DEFAULT nextval('public.attendance_attendance_id_seq'::regclass);


--
-- Name: face_image face_image_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.face_image ALTER COLUMN face_image_id SET DEFAULT nextval('public.face_image_face_image_id_seq'::regclass);


--
-- Name: student_of_course student_of_course_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_of_course ALTER COLUMN student_of_course_id SET DEFAULT nextval('public.student_of_course_student_of_course_id_seq'::regclass);


--
-- Name: teacher_of_course teacher_of_course_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teacher_of_course ALTER COLUMN teacher_of_course_id SET DEFAULT nextval('public.teacher_of_course_teacher_of_course_id_seq'::regclass);


--
-- Name: tutorials id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tutorials ALTER COLUMN id SET DEFAULT nextval('public.tutorials_id_seq'::regclass);


--
-- Name: account account_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account
    ADD CONSTRAINT account_pkey PRIMARY KEY (account_id);


--
-- Name: attendance attendance_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendance
    ADD CONSTRAINT attendance_pkey PRIMARY KEY (attendance_id);


--
-- Name: class class_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.class
    ADD CONSTRAINT class_pkey PRIMARY KEY (class_id);


--
-- Name: course course_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_pkey PRIMARY KEY (course_id);


--
-- Name: face_image face_image_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.face_image
    ADD CONSTRAINT face_image_pkey PRIMARY KEY (face_image_id);


--
-- Name: student_of_course student_of_course_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_of_course
    ADD CONSTRAINT student_of_course_pkey PRIMARY KEY (student_of_course_id);


--
-- Name: student student_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_pkey PRIMARY KEY (student_id);


--
-- Name: teacher_of_course teacher_of_course_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teacher_of_course
    ADD CONSTRAINT teacher_of_course_pkey PRIMARY KEY (teacher_of_course_id);


--
-- Name: teacher teacher_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_pkey PRIMARY KEY (teacher_id);


--
-- Name: tutorial tutorial_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tutorial
    ADD CONSTRAINT tutorial_pkey PRIMARY KEY (class_id);


--
-- Name: tutorials tutorials_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tutorials
    ADD CONSTRAINT tutorials_pkey PRIMARY KEY (id);


--
-- Name: account account_teacher_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account
    ADD CONSTRAINT account_teacher_id_fkey FOREIGN KEY (teacher_id) REFERENCES public.teacher(teacher_id);


--
-- Name: attendance attendance_student_of_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendance
    ADD CONSTRAINT attendance_student_of_course_id_fkey FOREIGN KEY (student_of_course_id) REFERENCES public.student_of_course(student_of_course_id);


--
-- Name: face_image face_image_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.face_image
    ADD CONSTRAINT face_image_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.student(student_id);


--
-- Name: student student_class_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_class_id_fkey FOREIGN KEY (class_id) REFERENCES public.class(class_id);


--
-- Name: student_of_course student_of_course_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_of_course
    ADD CONSTRAINT student_of_course_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.course(course_id);


--
-- Name: student_of_course student_of_course_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_of_course
    ADD CONSTRAINT student_of_course_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.student(student_id);


--
-- Name: teacher_of_course teacher_of_course_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teacher_of_course
    ADD CONSTRAINT teacher_of_course_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.course(course_id);


--
-- Name: teacher_of_course teacher_of_course_teacher_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teacher_of_course
    ADD CONSTRAINT teacher_of_course_teacher_id_fkey FOREIGN KEY (teacher_id) REFERENCES public.teacher(teacher_id);


--
-- PostgreSQL database dump complete
--

