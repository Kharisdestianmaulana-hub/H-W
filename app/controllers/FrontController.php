<?php

class FrontController extends Controller
{
    public function index(): void
    {
        $this->view('front/index');
    }

    public function about(): void
    {
        $this->view('front/about');
    }

    public function product(): void
    {
        $this->view('front/product');
    }

    public function productDetail(): void
    {
        $this->view('front/product-detail');
    }

    public function contact(): void
    {
        $this->view('front/contact');
    }

    public function notFound(): void
    {
        $this->view('front/index');
    }
}
