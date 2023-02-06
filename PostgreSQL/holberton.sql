PGDMP     4    8                {            holbert_test    15.1    15.1 6    4           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            5           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            6           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            7           1262    16399    holbert_test    DATABASE        CREATE DATABASE holbert_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE holbert_test;
                postgres    false            �            1259    16424    asignaciones    TABLE     k   CREATE TABLE public.asignaciones (
    id integer NOT NULL,
    id_alumno integer,
    id_grupo integer
);
     DROP TABLE public.asignaciones;
       public         heap    postgres    false            �            1259    16423    asignaciones_id_seq    SEQUENCE     �   CREATE SEQUENCE public.asignaciones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.asignaciones_id_seq;
       public          postgres    false    219            8           0    0    asignaciones_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.asignaciones_id_seq OWNED BY public.asignaciones.id;
          public          postgres    false    218            �            1259    16470    asistencias    TABLE     �   CREATE TABLE public.asistencias (
    id integer NOT NULL,
    id_alumno integer,
    id_grupo integer,
    asistencia integer NOT NULL
);
    DROP TABLE public.asistencias;
       public         heap    postgres    false            �            1259    16469    asistencias_id_seq    SEQUENCE     �   CREATE SEQUENCE public.asistencias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.asistencias_id_seq;
       public          postgres    false    225            9           0    0    asistencias_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.asistencias_id_seq OWNED BY public.asistencias.id;
          public          postgres    false    224            �            1259    16453    calificaciones    TABLE     �   CREATE TABLE public.calificaciones (
    id integer NOT NULL,
    id_alumno integer,
    id_grupo integer,
    calificacion integer NOT NULL
);
 "   DROP TABLE public.calificaciones;
       public         heap    postgres    false            �            1259    16452    calificaciones_id_seq    SEQUENCE     �   CREATE SEQUENCE public.calificaciones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.calificaciones_id_seq;
       public          postgres    false    223            :           0    0    calificaciones_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.calificaciones_id_seq OWNED BY public.calificaciones.id;
          public          postgres    false    222            �            1259    16410    grupos    TABLE     �   CREATE TABLE public.grupos (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    id_profesor integer,
    materia character varying(255) NOT NULL
);
    DROP TABLE public.grupos;
       public         heap    postgres    false            �            1259    16409    grupos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.grupos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.grupos_id_seq;
       public          postgres    false    217            ;           0    0    grupos_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.grupos_id_seq OWNED BY public.grupos.id;
          public          postgres    false    216            �            1259    16441    recursos    TABLE     �   CREATE TABLE public.recursos (
    id integer NOT NULL,
    id_grupo integer,
    nombre_recurso character varying(255) NOT NULL
);
    DROP TABLE public.recursos;
       public         heap    postgres    false            �            1259    16440    recursos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.recursos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.recursos_id_seq;
       public          postgres    false    221            <           0    0    recursos_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.recursos_id_seq OWNED BY public.recursos.id;
          public          postgres    false    220            �            1259    16401    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre_usuario character varying(255) NOT NULL,
    "contraseña" character varying(255) NOT NULL,
    tipo character varying(10) NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    16400    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public          postgres    false    215            =           0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public          postgres    false    214            �           2604    16427    asignaciones id    DEFAULT     r   ALTER TABLE ONLY public.asignaciones ALTER COLUMN id SET DEFAULT nextval('public.asignaciones_id_seq'::regclass);
 >   ALTER TABLE public.asignaciones ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    16473    asistencias id    DEFAULT     p   ALTER TABLE ONLY public.asistencias ALTER COLUMN id SET DEFAULT nextval('public.asistencias_id_seq'::regclass);
 =   ALTER TABLE public.asistencias ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    16456    calificaciones id    DEFAULT     v   ALTER TABLE ONLY public.calificaciones ALTER COLUMN id SET DEFAULT nextval('public.calificaciones_id_seq'::regclass);
 @   ALTER TABLE public.calificaciones ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    223    223                       2604    16413 	   grupos id    DEFAULT     f   ALTER TABLE ONLY public.grupos ALTER COLUMN id SET DEFAULT nextval('public.grupos_id_seq'::regclass);
 8   ALTER TABLE public.grupos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    16444    recursos id    DEFAULT     j   ALTER TABLE ONLY public.recursos ALTER COLUMN id SET DEFAULT nextval('public.recursos_id_seq'::regclass);
 :   ALTER TABLE public.recursos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            ~           2604    16404    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            +          0    16424    asignaciones 
   TABLE DATA           ?   COPY public.asignaciones (id, id_alumno, id_grupo) FROM stdin;
    public          postgres    false    219   c=       1          0    16470    asistencias 
   TABLE DATA           J   COPY public.asistencias (id, id_alumno, id_grupo, asistencia) FROM stdin;
    public          postgres    false    225   �=       /          0    16453    calificaciones 
   TABLE DATA           O   COPY public.calificaciones (id, id_alumno, id_grupo, calificacion) FROM stdin;
    public          postgres    false    223   �=       )          0    16410    grupos 
   TABLE DATA           B   COPY public.grupos (id, nombre, id_profesor, materia) FROM stdin;
    public          postgres    false    217   �=       -          0    16441    recursos 
   TABLE DATA           @   COPY public.recursos (id, id_grupo, nombre_recurso) FROM stdin;
    public          postgres    false    221   �=       '          0    16401    usuarios 
   TABLE DATA           K   COPY public.usuarios (id, nombre_usuario, "contraseña", tipo) FROM stdin;
    public          postgres    false    215   �=       >           0    0    asignaciones_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.asignaciones_id_seq', 1, false);
          public          postgres    false    218            ?           0    0    asistencias_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.asistencias_id_seq', 1, false);
          public          postgres    false    224            @           0    0    calificaciones_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.calificaciones_id_seq', 1, false);
          public          postgres    false    222            A           0    0    grupos_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.grupos_id_seq', 1, false);
          public          postgres    false    216            B           0    0    recursos_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.recursos_id_seq', 1, false);
          public          postgres    false    220            C           0    0    usuarios_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.usuarios_id_seq', 1, false);
          public          postgres    false    214            �           2606    16429    asignaciones asignaciones_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.asignaciones
    ADD CONSTRAINT asignaciones_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.asignaciones DROP CONSTRAINT asignaciones_pkey;
       public            postgres    false    219            �           2606    16475    asistencias asistencias_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.asistencias
    ADD CONSTRAINT asistencias_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.asistencias DROP CONSTRAINT asistencias_pkey;
       public            postgres    false    225            �           2606    16458 "   calificaciones calificaciones_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.calificaciones
    ADD CONSTRAINT calificaciones_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.calificaciones DROP CONSTRAINT calificaciones_pkey;
       public            postgres    false    223            �           2606    16417    grupos grupos_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.grupos
    ADD CONSTRAINT grupos_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.grupos DROP CONSTRAINT grupos_pkey;
       public            postgres    false    217            �           2606    16446    recursos recursos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.recursos
    ADD CONSTRAINT recursos_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.recursos DROP CONSTRAINT recursos_pkey;
       public            postgres    false    221            �           2606    16408    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    215            �           2606    16430 (   asignaciones asignaciones_id_alumno_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.asignaciones
    ADD CONSTRAINT asignaciones_id_alumno_fkey FOREIGN KEY (id_alumno) REFERENCES public.usuarios(id);
 R   ALTER TABLE ONLY public.asignaciones DROP CONSTRAINT asignaciones_id_alumno_fkey;
       public          postgres    false    3205    215    219            �           2606    16435 '   asignaciones asignaciones_id_grupo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.asignaciones
    ADD CONSTRAINT asignaciones_id_grupo_fkey FOREIGN KEY (id_grupo) REFERENCES public.grupos(id);
 Q   ALTER TABLE ONLY public.asignaciones DROP CONSTRAINT asignaciones_id_grupo_fkey;
       public          postgres    false    219    3207    217            �           2606    16476 &   asistencias asistencias_id_alumno_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.asistencias
    ADD CONSTRAINT asistencias_id_alumno_fkey FOREIGN KEY (id_alumno) REFERENCES public.usuarios(id);
 P   ALTER TABLE ONLY public.asistencias DROP CONSTRAINT asistencias_id_alumno_fkey;
       public          postgres    false    225    3205    215            �           2606    16481 %   asistencias asistencias_id_grupo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.asistencias
    ADD CONSTRAINT asistencias_id_grupo_fkey FOREIGN KEY (id_grupo) REFERENCES public.grupos(id);
 O   ALTER TABLE ONLY public.asistencias DROP CONSTRAINT asistencias_id_grupo_fkey;
       public          postgres    false    217    3207    225            �           2606    16459 ,   calificaciones calificaciones_id_alumno_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.calificaciones
    ADD CONSTRAINT calificaciones_id_alumno_fkey FOREIGN KEY (id_alumno) REFERENCES public.usuarios(id);
 V   ALTER TABLE ONLY public.calificaciones DROP CONSTRAINT calificaciones_id_alumno_fkey;
       public          postgres    false    223    3205    215            �           2606    16464 +   calificaciones calificaciones_id_grupo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.calificaciones
    ADD CONSTRAINT calificaciones_id_grupo_fkey FOREIGN KEY (id_grupo) REFERENCES public.grupos(id);
 U   ALTER TABLE ONLY public.calificaciones DROP CONSTRAINT calificaciones_id_grupo_fkey;
       public          postgres    false    217    223    3207            �           2606    16418    grupos grupos_id_profesor_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.grupos
    ADD CONSTRAINT grupos_id_profesor_fkey FOREIGN KEY (id_profesor) REFERENCES public.usuarios(id);
 H   ALTER TABLE ONLY public.grupos DROP CONSTRAINT grupos_id_profesor_fkey;
       public          postgres    false    217    3205    215            �           2606    16447    recursos recursos_id_grupo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.recursos
    ADD CONSTRAINT recursos_id_grupo_fkey FOREIGN KEY (id_grupo) REFERENCES public.grupos(id);
 I   ALTER TABLE ONLY public.recursos DROP CONSTRAINT recursos_id_grupo_fkey;
       public          postgres    false    3207    217    221            +      x������ � �      1      x������ � �      /      x������ � �      )      x������ � �      -      x������ � �      '      x������ � �     