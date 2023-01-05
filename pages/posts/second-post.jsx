import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';

export default function SecondPost() {
  return (
    <Layout>
      <Head>
        <title>Second Post</title>
      </Head>
      <h1>Second Post</h1>
      <h2>
        <Link href="/">
          Back to home
        </Link>
      </h2>
    </Layout>
  );
}