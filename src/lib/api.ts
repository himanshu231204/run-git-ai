// API integration layer for RUN-GIT AI
// Uses NEXT_PUBLIC_API_URL environment variable
// Includes mock implementations for development

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

// Types
export interface User {
  id: string;
  email: string;
  plan: "Free" | "Pro";
  createdAt: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  message?: string;
}

export interface UsageData {
  used: number;
  limit: number;
  resetAt: string;
}

export interface ApiKeyData {
  key: string;
  createdAt: string;
  lastUsed?: string;
}

export interface PaymentOrder {
  id: string;
  amount: number;
  currency: string;
  status: "pending" | "completed" | "failed";
  paymentUrl?: string;
}

// API Functions

/**
 * Sign up a new user
 */
export async function signup(email: string, password: string): Promise<AuthResponse> {
  try {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    // Mock implementation for development
    console.log("Using mock signup");
    return mockSignup(email);
  }
}

/**
 * Login existing user
 */
export async function login(email: string, password: string): Promise<AuthResponse> {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    // Mock implementation for development
    console.log("Using mock login");
    return mockLogin(email);
  }
}

/**
 * Get user API key
 */
export async function getApiKey(token: string): Promise<ApiKeyData> {
  try {
    const response = await fetch(`${API_URL}/api-key`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    // Mock implementation for development
    console.log("Using mock getApiKey");
    return mockGetApiKey();
  }
}

/**
 * Get user usage data
 */
export async function getUsage(token: string): Promise<UsageData> {
  try {
    const response = await fetch(`${API_URL}/usage`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    // Mock implementation for development
    console.log("Using mock getUsage");
    return mockGetUsage();
  }
}

/**
 * Create payment order for upgrade
 */
export async function createPaymentOrder(
  token: string,
  provider: "razorpay" | "stripe"
): Promise<PaymentOrder> {
  try {
    const response = await fetch(`${API_URL}/billing/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ provider }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    // Mock implementation for development
    console.log("Using mock createPaymentOrder");
    return mockCreatePaymentOrder(provider);
  }
}

// Mock Implementations

function mockSignup(email: string): AuthResponse {
  return {
    success: true,
    user: {
      id: "usr_" + Math.random().toString(36).substr(2, 9),
      email,
      plan: "Free",
      createdAt: new Date().toISOString(),
    },
    token: "mock_token_" + Math.random().toString(36).substr(2, 16),
  };
}

function mockLogin(email: string): AuthResponse {
  return {
    success: true,
    user: {
      id: "usr_" + Math.random().toString(36).substr(2, 9),
      email,
      plan: "Free",
      createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
    token: "mock_token_" + Math.random().toString(36).substr(2, 16),
  };
}

function mockGetApiKey(): ApiKeyData {
  return {
    key: "sk_rungit_" + Math.random().toString(36).substr(2, 16),
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    lastUsed: new Date().toISOString(),
  };
}

function mockGetUsage(): UsageData {
  return {
    used: Math.floor(Math.random() * 30),
    limit: 50,
    resetAt: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
  };
}

function mockCreatePaymentOrder(
  provider: "razorpay" | "stripe"
): PaymentOrder {
  return {
    id: "order_" + Math.random().toString(36).substr(2, 9),
    amount: 29900, // ₹299 in paise
    currency: "INR",
    status: "pending",
    paymentUrl: provider === "razorpay" 
      ? "https://razorpay.mock/payment" 
      : "https://checkout.stripe.com/mock",
  };
}

// Payment Integration Utilities

/**
 * Initialize Razorpay payment
 */
export function initRazorpay(
  orderId: string,
  key: string,
  amount: number,
  email: string,
  onSuccess: () => void,
  onFailure: (error: string) => void
) {
  // This would load Razorpay SDK and initialize payment
  // For now, it's a placeholder for the actual implementation
  console.log("Initializing Razorpay:", { orderId, key, amount, email });
  
  // Mock: simulate successful payment
  setTimeout(() => {
    onSuccess();
  }, 2000);
}

/**
 * Initialize Stripe payment
 */
export function initStripe(
  sessionUrl: string,
  onSuccess: () => void,
  onFailure: (error: string) => void
) {
  // This would redirect to Stripe Checkout
  // For now, it's a placeholder for the actual implementation
  console.log("Redirecting to Stripe:", sessionUrl);
  
  // Mock: simulate successful payment
  setTimeout(() => {
    onSuccess();
  }, 2000);
}
