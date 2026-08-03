import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import HomePage from "../pages/Home/HomePage";
import AssurancePage from "../pages/Assurance/AssurancePage";
import BlogPage from "../pages/Blog/BlogPage";
import ContactPage from "../pages/Contact/ContactPage";
import AssuranceAutoMotoPage from "../pages/AssuranceAutoMoto/AssuranceAutoMotoPage";
import JeuneConducteurPage from "../pages/AssuranceAutoMoto/JeuneConducteurPage";
import ResiliePage from "../pages/AssuranceAutoMoto/ResiliePage";
import BonusAViePage from "../pages/AssuranceAutoMoto/BonusAViePage";
import MalusePage from "../pages/AssuranceAutoMoto/MalusePage";
import AssuranceTemporairePage from "../pages/AssuranceAutoMoto/AssuranceTemporairePage";
import SignupPage from "../pages/Auth/SignupPage";
import LoginPage from "../pages/Auth/LoginPage";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";
import UsersPage from "../pages/Users/UsersPage";
import DemandsPage from "../pages/Demands/DemandsPage";
import DemandDetailsPage from "../pages/Demands/DemandDetailsPage";
import CreateProductPage from "../pages/Product/CreateProductPage";
import CreateInsuranceTypePage from "../pages/Assurance/InsuranceType/CreateInsuranceTypePage";
import InsuranceTypesPage from "../pages/Assurance/InsuranceType/InsuranceTypesPage";
import ProductsPage from "../pages/Product/ProductsPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="users" element={<UsersPage />} />

          <Route path="demands" element={<DemandsPage />} />
          <Route path="demands/:id" element={<DemandDetailsPage />} />

          <Route path="insurance-types" element={<InsuranceTypesPage />} />
          <Route
            path="assuracetypes/create"
            element={<CreateInsuranceTypePage />}
          />

          <Route path="products" element={<ProductsPage />} />
          <Route path="products/create" element={<CreateProductPage />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/assurance" element={<AssurancePage />} />

          <Route path="/blog" element={<BlogPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route
            path="/assurance-auto-moto"
            element={<AssuranceAutoMotoPage />}
          />

          <Route
            path="/assurance-auto-moto/jeune-conducteur"
            element={<JeuneConducteurPage />}
          />

          <Route
            path="/assurance-auto-moto/resilie"
            element={<ResiliePage />}
          />

          <Route
            path="/assurance-auto-moto/bonus-a-vie"
            element={<BonusAViePage />}
          />

          <Route path="/assurance-auto-moto/maluse" element={<MalusePage />} />

          <Route
            path="/assurance-auto-moto/temporaire"
            element={<AssuranceTemporairePage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
